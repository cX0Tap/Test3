import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css'],
})
export class RoomManagementComponent implements OnInit {
  roomForm!: FormGroup;
  rooms: any[] = []; // Example array for storing rooms data

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with controls and validation rules
    this.roomForm = this.fb.group({
      room_id: ['', Validators.required],
      room_type: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      price_per_night: [0, [Validators.required, Validators.min(0)]],
      availability: [false],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.roomForm.valid) {
      // Add form data to rooms array
      this.rooms.push(this.roomForm.value);

      // Reset the form
      this.roomForm.reset();
    }
  }

  onCancel(): void {
    // Clear the form
    this.roomForm.reset();
  }
}
