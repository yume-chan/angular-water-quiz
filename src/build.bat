@echo off
call lessc index.less index.css --clean-css
call lessc app/common.less app/common.css --clean-css
call lessc app/answer.component.less app/answer.component.css --clean-css
call lessc app/app.component.less app/app.component.css --clean-css
call lessc app/gretting.component.less app/gretting.component.css --clean-css
call lessc app/question.component.less app/question.component.css --clean-css
call lessc app/result.component.less app/result.component.css --clean-css
call lessc app/view.component.less app/view.component.css --clean-css
call npm run build:aot
call node copy-dist-files