// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MpnAgz+bJgHkQ+cBOVuhE/VfcGaLfjsQcXY1DiYy/xDCiZ+K8ZqZUsdgwj+tAYgrRHZalE/y1eWoY9Pzbe5CG/Ds6Im1PaWULNM43nYtkXdRGCVznGOCEVTlKh5pJSDCgCt729SgBbFDcNNjMXNdq4G3H016LNtZ0Q8NXwWkgeo5PqCh7FEFqHRPrJdnHGxUK5FzXaJ4t9xbMHVXChkH6s/jBBCMBsr6vU3Rgm5v5CuB3he8bwxhRsqQ7rDVgpheXaSKH0ktxxJN7iOQCuX40AMujbZ5IIlVN8BG0hyOhRUi7sFkK9aAJPOHaQz+w7GmUkGGTWQnde6HZzJXB+ZCG1it4mPDwvtTp+zZ8QR5erBqNpQwGbTNRuyFQkwamDy8/z5LSFrBe0j05LJnZUxdZ9tTX7Pg6IQCyuJkM3SolOLCeeTQ9CmfF8RVGLfL3jl55xWekUNw57WT3IXIquQWGB/bg5IV1tC95wxSi4xee+1KF3xMH3s1HTWKfFT+NFQT5HXlrtV5D9td3wO9l3MPOnWA3TXRcNXa0m0WDcmNE2YcwD60FjYG5NFpc0MZpty8pzaT9TDSE8AXtLBvbQahOxL4AikNwygnMDbtQxEJZ1pqEC5z0iME5lCFUIOyny8b97FqmrE4qv1Ey1ASmTgnCnJCZHYcjaY+ba6gkda/19Jf286JihfAMNf8sAnWJPImp3CmN7u+ceZDWyJShb/l6c5zQWwHOA9BpDq8WGCxNscxsAhQsQjGxSUSpHaXKJKfF/v63FDde+ve6wVYWVt2XsfMH2mPeOoLoPiBKt3FZS49PQ+rQObD62omGlyaX2vnuRJ6W2DvVP+os7AA4lzZB0q16uUxesrHz74TAhA7uLT5DxP6sRJ457VbTUXxNEoZghLjeo4iqUsKGcf225E9aia/JZQgBbfKpeI63y3ktABtrRvRTonQFaejq2+mZSWcdFraRA4gaFWxUW/IDArH+2ZmriKUNCTamJxTcaEi5vSgM31u5i5a76LJ9iyYOPYUP30kbZ2dDV+9d13d4yaUpfPGQvOROZLXEjBErluuuX82q/97DWTk7LktAh/VycNvrA+J2kqFPoFkvsESujMSAVSWQ8k2Nf+wZOo95ONkEnRWQ7hmMM7nEWIz+8X5WBlphQi1bvIGE4BqrnW0Yh9nYDzC5RfcYfP9Zs8HtVN0VaSV1tZWEz75lh0HTLsjGJTBhcPxjTb2ESGtzhMNcIqGG8FNplFjHsl2Sbc/rUTTIK59nPce+C7IjalWM15jp+foWPkc6Zc0kojhzixV8p/41205HewoxNa76hjuLQOkyDkgQc/gRPqEG2ZEUERZH7tLgyQfyab37ChuXEZCO219KoRpCR0v2OqF7tSf1iflp88LxrZNiAFpAfTNg9gOzo4TC8kJrci3z6k6YyQCyCS/wVZylYrRQBuCY2TK6PIcE1irmylVB+4cNA==';const _IH='075ed9c32764f8eda4341c990a1385b1b7c9af5fa60a03e58982444a5d3ed6ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
