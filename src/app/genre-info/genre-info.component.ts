import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-genre-info',
  templateUrl: './genre-info.component.html',
  styleUrls: ['./genre-info.component.scss']
})
export class GenreInfoComponent implements OnInit {
   /**
   *
   * @param fetchApiData makes call to api
   * @param data data related to the selected genre
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      genres: any[];
    }
  ) { }

/**
   * This function calls specified methods automatically straight after Component was mounted
   */

  ngOnInit(): void { }
}
