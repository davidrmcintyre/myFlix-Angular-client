import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-info',
  templateUrl: './director-info.component.html',
  styleUrls: ['./director-info.component.scss']
})
export class DirectorInfoComponent implements OnInit {
    /**
   *
   * @param fetchApiData calls to the api
   * @param data data for the selected director
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      firstName: string;
      lastName: string;
      Bio: string;
      dateOfBirth: string;
    }
  ) { }


  /**
   * This function calls specified methods automatically straight after Component was mounted
   */
  ngOnInit(): void { }
}
