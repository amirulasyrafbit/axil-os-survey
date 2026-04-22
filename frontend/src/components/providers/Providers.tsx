'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50:  '#e6f8f2',
      100: '#b3ecda',
      200: '#80dfc2',
      300: '#4dd3aa',
      400: '#26c897',
      500: '#1D9E75',
      600: '#178f68',
      700: '#117d5a',
      800: '#0b6b4c',
      900: '#054f38',
    },
    secondaryGray: {
      100: '#E0E5F2',
      200: '#E1E9F8',
      300: '#F4F7FE',
      400: '#E9EDF7',
      500: '#8F9BBA',
      600: '#A3AED0',
      700: '#707EAE',
      800: '#707EAE',
      900: '#1B2559',
    },
    navy: {
      50:  '#d0dcfb',
      100: '#aac0fe',
      200: '#a3b9f8',
      300: '#728fea',
      400: '#3652ba',
      500: '#1b3bbb',
      600: '#24388a',
      700: '#1B254B',
      800: '#111c44',
      900: '#0b1437',
    },
    background: {
      100: '#FAFCFE',
      900: '#0b1437',
    },
    gray: {
      100: '#FAFCFE',
    },
  },
  fonts: {
    heading: `'DM Sans', system-ui, sans-serif`,
    body:    `'DM Sans', system-ui, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'background.100',
        color: 'navy.700',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        letterSpacing: '-0.3px',
        overflowX: 'hidden',
      },
      html: {
        fontFamily: "'DM Sans', system-ui, sans-serif",
      },
    },
  },
  radii: {
    none:  '0px',
    sm:    '4px',
    base:  '6px',
    md:    '8px',
    lg:    '12px',
    xl:    '16px',
    '2xl': '20px',
    '3xl': '24px',
    full:  '9999px',
  },
  components: {
    // ── Card ──────────────────────────────────────────────────────────────────
    Card: {
      baseStyle: {
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        borderRadius: '16px',
        minWidth: '0px',
        wordWrap: 'break-word',
        bg: '#ffffff',
        boxShadow: '0px 1px 11px 0px rgba(28, 35, 50, 0.04)',
        backgroundClip: 'border-box',
        border: '1px solid',
        borderColor: '#E2E8F0',
      },
    },
    // ── Button ────────────────────────────────────────────────────────────────
    Button: {
      baseStyle: {
        borderRadius: '6px',
        fontWeight: '500',
        transition: '.25s all ease',
        boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
        _focus: { boxShadow: 'none' },
        _active: { boxShadow: 'none' },
      },
      defaultProps: { colorScheme: 'brand' },
      variants: {
        brand: {
          bg: 'brand.500',
          color: 'white',
          _hover: { bg: 'brand.600' },
          _active: { bg: 'brand.700' },
        },
        outline: {
          borderColor: 'secondaryGray.100',
          color: 'navy.700',
          _hover: { bg: 'secondaryGray.300' },
        },
        ghost: {
          color: 'secondaryGray.700',
          _hover: { bg: 'secondaryGray.300' },
        },
      },
    },
    // ── Input ─────────────────────────────────────────────────────────────────
    Input: {
      baseStyle: {
        field: {
          color: 'navy.700',
          fontSize: 'sm',
          fontWeight: '500',
          borderRadius: '6px',
        },
      },
      variants: {
        outline: {
          field: {
            bg: 'white',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '6px',
            _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
            _hover: { borderColor: 'secondaryGray.500' },
            _focus: {
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px #1D9E75',
            },
          },
        },
      },
      defaultProps: { variant: 'outline', focusBorderColor: 'brand.500' },
    },
    // ── Textarea ──────────────────────────────────────────────────────────────
    Textarea: {
      baseStyle: {
        color: 'navy.700',
        fontSize: 'sm',
        fontWeight: '500',
        borderRadius: '6px',
      },
      variants: {
        outline: {
          bg: 'white',
          border: '1px solid',
          borderColor: 'secondaryGray.100',
          borderRadius: '6px',
          _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
          _hover: { borderColor: 'secondaryGray.500' },
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px #1D9E75',
          },
        },
      },
      defaultProps: { variant: 'outline', focusBorderColor: 'brand.500' },
    },
    // ── Select ────────────────────────────────────────────────────────────────
    Select: {
      variants: {
        outline: {
          field: {
            bg: 'white',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '6px',
            color: 'navy.700',
            fontWeight: '500',
            _hover: { borderColor: 'secondaryGray.500' },
            _focus: {
              borderColor: 'brand.500',
              boxShadow: '0 0 0 1px #1D9E75',
            },
          },
        },
      },
      defaultProps: { variant: 'outline', focusBorderColor: 'brand.500' },
    },
    // ── Progress ──────────────────────────────────────────────────────────────
    Progress: {
      defaultProps: { colorScheme: 'brand' },
      baseStyle: {
        track: { borderRadius: 'full', bg: 'secondaryGray.100' },
        filledTrack: { borderRadius: 'full' },
      },
    },
    // ── Badge ─────────────────────────────────────────────────────────────────
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: '600',
        fontSize: '10px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        px: '10px',
        py: '3px',
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
