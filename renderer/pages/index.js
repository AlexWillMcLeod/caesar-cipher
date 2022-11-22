"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const SwapHoriz_1 = __importDefault(require("@mui/icons-material/SwapHoriz"));
const ContentCopy_1 = __importDefault(require("@mui/icons-material/ContentCopy"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const utils_1 = require("../utils/");
const react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
const IndexPage = () => {
    const [originalText, setOriginalText] = (0, react_1.useState)('');
    const [encodedText, setEncodedText] = (0, react_1.useState)('');
    const [key, setKey] = (0, react_1.useState)(0);
    const [copiedSnackbarVisible, setCopiedSnackbarVisible] = (0, react_1.useState)(false);
    const handleCopy = () => {
        setCopiedSnackbarVisible(true);
    };
    const handleCopyClose = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setCopiedSnackbarVisible(false);
    };
    const closeCopyAction = (<material_1.IconButton size="small" aria-label="close" color="inherit" onClick={handleCopyClose}>
      <Close_1.default fontSize="small"/>
    </material_1.IconButton>);
    const handleKeyChange = (e) => {
        const tempKey = e.target.value;
        setKey(tempKey);
        setEncodedText((0, utils_1.encode)(originalText, tempKey));
    };
    const handleOriginalTextChange = (e) => {
        const tempOriginalText = e.target.value.toLowerCase();
        setOriginalText(tempOriginalText);
        setEncodedText((0, utils_1.encode)(tempOriginalText, key));
    };
    const handleEncodedTextChange = (e) => {
        const tempEncodedText = e.target.value.toLowerCase();
        setEncodedText(tempEncodedText);
        setOriginalText((0, utils_1.decode)(tempEncodedText, key));
    };
    const handleSwapClick = () => {
        const temp = originalText;
        setOriginalText(encodedText);
        setEncodedText(temp);
    };
    return (<div style={{
            padding: '0.7rem'
        }}>
      <material_1.Stack direction='column' spacing={2}>
        <material_1.Typography style={{
            fontFamily: 'Product Sans',
            fontWeight: 'bold',
            fontSize: '1.8rem'
        }}>
          Caesar Cipher
        </material_1.Typography>
        <material_1.Stack spacing={2}>
          <material_1.Stack direction='row' spacing={2}>
            <material_1.Box>
              <material_1.TextField label='Orignal Text' value={originalText} onChange={handleOriginalTextChange} InputProps={{ endAdornment: <react_copy_to_clipboard_1.CopyToClipboard text={originalText}><material_1.IconButton onClick={handleCopy}><ContentCopy_1.default /></material_1.IconButton></react_copy_to_clipboard_1.CopyToClipboard> }}/>
            </material_1.Box>
            <material_1.Button variant="contained" onClick={handleSwapClick}>
              <SwapHoriz_1.default />
            </material_1.Button>
            <material_1.Box>
              <material_1.TextField label='Encoded Text' value={encodedText} onChange={handleEncodedTextChange} InputProps={{ endAdornment: <react_copy_to_clipboard_1.CopyToClipboard text={encodedText}><material_1.IconButton onClick={handleCopy}><ContentCopy_1.default /></material_1.IconButton></react_copy_to_clipboard_1.CopyToClipboard> }}/>

            </material_1.Box>
          </material_1.Stack>
          <material_1.Box>
            <material_1.TextField label='Key' type='number' size='medium' value={key} onChange={handleKeyChange}/>
          </material_1.Box>
        </material_1.Stack>
      </material_1.Stack>
      <material_1.Snackbar open={copiedSnackbarVisible} autoHideDuration={6000} message="Copied" onClose={handleCopyClose} action={closeCopyAction}/>
    </div>);
};
exports.default = IndexPage;
