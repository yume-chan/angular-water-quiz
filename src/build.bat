@echo off
call npm run lessc index.less index.css --clean-css
call npm run lessc app/common.less app/common.css --clean-css
call npm run lessc app/answer.component.less app/answer.component.css --clean-css
call npm run lessc app/app.component.less app/app.component.css --clean-css
call npm run lessc app/gretting.component.less app/gretting.component.css --clean-css
call npm run lessc app/question.component.less app/question.component.css --clean-css
call npm run lessc app/result.component.less app/result.component.css --clean-css
call npm run lessc app/view.component.less app/view.component.css --clean-css
call npm run build:aot
call node copy-dist-files