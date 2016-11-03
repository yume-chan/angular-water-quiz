declare namespace wx {
    interface WxConfig {
        debug?: boolean;
        appId: string;
        timestamp: number;
        nonceStr: string;
        signature: string
        jsApiList: string[];
    }

    interface WxResult {
        errMsg: string;
    }

    interface WxParams<T extends WxResult> {
        success?: (res: T) => void;
        fail?: (res: T) => void;
        complete?: (res: T) => void;
        cancel?: (res: T) => void;
    }

    interface WxMenuParams<T extends WxResult> extends WxParams<T> {
        trigger?: (res: T) => void;
    }

    function config(obj: WxConfig): void;

    function ready(callback: () => void): void;

    function error(callback: (res: WxResult) => void): void;

    interface CheckJsApiResult extends WxResult {
        checkResult: { [key: string]: boolean };
    }

    interface CheckJsApiParams extends WxParams<CheckJsApiResult> {
        jsApiList: string[];
    }

    function checkJsApi(param: CheckJsApiParams): void;

    interface ShareBasicParams extends WxMenuParams<WxResult> {
        title: string;
        link: string;
        imgUrl: string;
    }

    function onMenuShareTimeline(param: ShareBasicParams): void;

    interface ShareWithTypeParams extends ShareWithDescParams {
        type?: "music" | "video" | "link";
    }

    function onMenuShareAppMessage(param: ShareWithTypeParams): void;

    interface ShareWithDescParams extends ShareBasicParams {
        desc: string;
    }

    function onMenuShareQQ(param: ShareWithDescParams): void;

    function onMenuShareWeibo(param: ShareWithDescParams): void;

    function onMenuShareQZone(param: ShareWithDescParams): void;

    interface ChooseImageResult extends WxResult {
        localIds: string[];
    }

    interface ChooseImageParams extends WxParams<ChooseImageResult> {
        count?: number;
        sizeType?: ("original" | "compressed")[];
        sourceType?: ("album" | "camera")[]
    }

    function chooseImage(param: ChooseImageParams): void;

    interface PreviewImageParams {
        current: string;
        urls: string[];
    }

    function previewImage(param: PreviewImageParams): void;

    interface UploadFileResult extends WxResult {
        serverId: string;
    }

    interface UploadFileParams extends WxParams<UploadFileResult> {
        localId: string;
        isShowProgressTips?: number;
    }

    function uploadImage(param: UploadFileParams): void;

    interface DownloadFileResult extends WxResult {
        localId: string;
    }

    interface SpecifyFileParams<T extends WxResult> extends WxParams<T> {
        serverId: string;
        isShowProgressTips?: number;
    }

    function downloadImage(param: SpecifyFileParams<DownloadFileResult>): void;

    function startRecord(): void;

    function stopRecord(param: WxParams<DownloadFileResult>): void;

    function onVoiceRecordEnd(param: WxParams<DownloadFileResult>): void;

    function playVoice(): void;

    function pauseVoice(): void;

    function stopVoice(): void;

    function onVoicePlayEnd(param: WxParams<DownloadFileResult>): void;

    function uploadVoice(param: UploadFileParams): void;

    function downloadVoice(param: SpecifyFileParams<DownloadFileResult>): void;

    interface TranslateVoiceResult extends WxResult {
        translateResult: string;
    }

    function translateVoice(param: SpecifyFileParams<TranslateVoiceResult>): void;

    interface GetNetworkTypeResult extends WxResult {
        networkType: "2g" | "3g" | "4g" | "wifi";
    }

    function getNetworkType(param: WxParams<GetNetworkTypeResult>): void;

    function hideOptionMenu(): void;

    function showOptionMenu(): void;

    function closeWindow(): void;

    interface MenuItemsParams {
        menuList: string[];
    }

    function hideMenuItems(param: MenuItemsParams): void;

    function showMenuItems(param: MenuItemsParams): void;

    function hideAllNonBaseMenuItem(): void;

    function showAllNonBaseMenuItem(): void;

    interface ScanQRCodeResult extends WxResult {
        resultStr: string;
    }

    interface ScanQRCodeParams extends WxParams<ScanQRCodeResult> {
        needResult?: number;
        scanType?: ("qrCode" | "barCode")[];
    }

    function scanQRCode(param: ScanQRCodeParams): void;
}