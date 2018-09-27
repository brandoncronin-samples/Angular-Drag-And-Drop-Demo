import { Directive, HostListener, HostBinding, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Input() private allowed_extensions: Array<string> = [];
  @Output() private filesChangeEmitter : EventEmitter<File[]> = new EventEmitter();
  @Output() private filesInvalidEmitter : EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';

  constructor() { }

  @HostListener('dragover', ['$event']) ondragover(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files = evt.dataTransfer.files;
    let valid_files : Array<File> = [];
    let invalid_files : Array<File> = [];
    if (files.length > 0) {

      for(var i = 0; i < files.length; i++) {
        let ext = files[i].name.split('.')[files[i].name.split('.').length - 1];
        if(this.allowed_extensions.lastIndexOf(ext) != -1){
          valid_files.push(files[i]);
        }else{
          invalid_files.push(files[i]);
        }
      }

      this.filesChangeEmitter.emit(valid_files);
      this.filesInvalidEmitter.emit(invalid_files);
    }
  }

}
