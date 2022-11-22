import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
  Snackbar,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import { encode, decode } from '../utils/';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const IndexPage = () => {
  const [originalText, setOriginalText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [key, setKey] = useState(0);

  const [copiedSnackbarVisible, setCopiedSnackbarVisible] = useState(false);

  const handleCopy = () => {
    setCopiedSnackbarVisible(true);
  };

  const handleCopyClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setCopiedSnackbarVisible(false);
  };

  const closeCopyAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCopyClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const handleKeyChange = (e) => {
    const tempKey = e.target.value;
    setKey(tempKey);
    setEncodedText(encode(originalText, tempKey));
  };

  const handleOriginalTextChange = (e) => {
    const tempOriginalText = e.target.value.toLowerCase();
    setOriginalText(tempOriginalText);
    setEncodedText(encode(tempOriginalText, key));
  };

  const handleEncodedTextChange = (e) => {
    const tempEncodedText = e.target.value.toLowerCase();
    setEncodedText(tempEncodedText);
    setOriginalText(decode(tempEncodedText, key));
  };

  const handleSwapClick = () => {
    const temp = originalText;
    setOriginalText(encodedText);
    setEncodedText(temp);
  };

  return (
    <div
      style={{
        padding: '0.7rem',
      }}
    >
      <Stack
        direction="column"
        spacing={2}
      >
        <Typography
          style={{
            fontFamily: 'Product Sans',
            fontWeight: 'bold',
            fontSize: '1.8rem',
          }}
        >
          Caesar Cipher
        </Typography>
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={2}
          >
            <Box>
              <TextField
                label="Orignal Text"
                value={originalText}
                onChange={handleOriginalTextChange}
                InputProps={{
                  endAdornment: (
                    <CopyToClipboard text={originalText}>
                      <IconButton onClick={handleCopy}>
                        <ContentCopyIcon />
                      </IconButton>
                    </CopyToClipboard>
                  ),
                }}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleSwapClick}
            >
              <SwapHorizIcon />
            </Button>
            <Box>
              <TextField
                label="Encoded Text"
                value={encodedText}
                onChange={handleEncodedTextChange}
                InputProps={{
                  endAdornment: (
                    <CopyToClipboard text={encodedText}>
                      <IconButton onClick={handleCopy}>
                        <ContentCopyIcon />
                      </IconButton>
                    </CopyToClipboard>
                  ),
                }}
              />
            </Box>
          </Stack>
          <Box>
            <TextField
              label="Key"
              type="number"
              size="medium"
              value={key}
              onChange={handleKeyChange}
            />
          </Box>
        </Stack>
      </Stack>
      <Snackbar
        open={copiedSnackbarVisible}
        autoHideDuration={6000}
        message="Copied"
        onClose={handleCopyClose}
        action={closeCopyAction}
      />
    </div>
  );
};

export default IndexPage;
