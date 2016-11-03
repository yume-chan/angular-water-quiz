import {
    Component,
    Input,
    AfterViewInit,
    ViewChild,
    ElementRef,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';

import { AppService, RankItem, UserRank } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'rank',
    templateUrl: 'rank.component.html',
    // host: {
    //     "[@enter]": "true"
    // },
    // animations: [
    //     trigger('enter', [
    //         transition(':enter', [
    //             style({ transform: 'translateX(100%)' }),
    //             animate('0.5s ease')
    //         ])
    //     ])
    // ]
})
export class RankComponent implements AfterViewInit {
    constructor(public appService: AppService) { }

    @ViewChild("scroller", { read: ElementRef })
    container: ElementRef;

    list: RankItem[] = [];
    pageIndex: number = 0;
    pageSize: number = 15;
    hasMore: boolean = true;
    private load() {
        this.appService
            .getRank(this.pageIndex++, this.pageSize)
            .then(list => {
                this.list.push(...list);
                if (list.length < this.pageSize)
                    this.hasMore = false;
            })
            .catch(err => { });;
    }

    scroll(e: UIEvent) {
        if (!this.hasMore)
            return;

        let target = e.target as HTMLDivElement;
        if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
            this.load();
        }
    }

    rank: UserRank = null;

    ngAfterViewInit(): void {
        this.pageSize = Math.ceil((this.container.nativeElement as HTMLDivElement).clientHeight / 22) + 1;
        this.load();

        this.appService
            .getUserRank()
            .then(rank => {
                if (rank.code == 6000) {
                    this.rank = null;
                    return;
                }
                this.rank = rank;
            })
            .catch(err => { });
    }
}