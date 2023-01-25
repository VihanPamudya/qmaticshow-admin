import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  displayData: any = 0;
  displayedColumns: string[] = [
    'name',
    'unitId',
    'minVisitDisplayTime',
    'bandwidthLimit',
    'screenRotation',
    'mediaUpdateTime',
    'queues',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  public dashboardRowCSSHeight = '600px';
  public allFeildsDisabled: boolean = false;

constructor(private deviceService: DeviceService){}

  ngOnInit(): void {
    this.getAllDevices();
  }

  getAllDevices() {
    this.deviceService.getDeviceTypes().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.displayData = res;
    });
  }

}
