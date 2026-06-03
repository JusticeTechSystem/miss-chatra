// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tRYF9ZnMDAZKwJU8IFP8Pw9ZyLgEXKaXH981v4sVCgypIP45ofPYEj5T5h2FpVw+Ok5es03J7p9a0omDkNrgfag0b/Kk/yKaPn3HfWEhCXQF9s/znypZfOvcqtz25jQQC4WKqi9ubgK9OBGzWWFNUrm2MvuCtXGkF3B/a6F2aZE+luvkjjoxBnLJNDskBj6V5uz1yIQTaIYkXtfK2pNv5MSBGEhkRXUP6iyJUoDPn7e0nX6HJYIPfDoQmremLgmEYeVayLeeQCzlqfT8yID8SmTu+vpcO1i3kO+fGLAq+GmFNR14Omy1At8yTGaEY18qEeFdf/moLSR/aG9d//SvQj6Y1DT9nFTja1zNssOR4ssDmsbD8W+FpRmELM+zbhL5WsJO3A8fnjJi4/+jLRuW6voHsS9FIUbEz/HkNAF1w/mhxeRdI3GdvkDPaUUeeQDuKlRW4Y9UNJ5ohdOTzyIk4hadO8BblbK9N/3A46/+1ngYmbOboKWcc5eSoBpcO1bezQZ3F6Ad+OhJPeqmxHo5PjeFdMX00tfXARjX4NcW5HXp+z0s1bcpk5jUGAYOgmBRYPFY41rBs5OOD+4EXyy8rpQefNfEqd2+v8Zmxo0z02hvFfX2SbhzFsapli6X/4awRhijRIxEKGFlPzPfod7uR5RaOARCECP5L02KCJE460BMO8bOb8HMoW4GaJuId3XNztc/sxL/O7UodRI+1R3oRe7fz5jsjJx5UtzAyWi7d5Ax/NjUP8s8c6QWAafoZCig+wsPX0WmasgMkE7VQmexa5qnO+zulWjVPwlgtiIGeZCvy4b2eVoAsTThtXKJElQMT1rfBgn0MGdjfhPInbJ0TKVxFzXhnMVP9cPZUMU+OgC//meDQjJlmPCkx61yEYfUE5c71nYyPev9Qe7Y/YzdpAgtjWIzudDMkUCfYR7rX7jCPTzp4VXwlVt8hD/QcyZMx8hwYc8u9hu7OgBhKoDShRooUTuD1zHWSfV/biD8/dNdEdX2KKgAaoPE8NJn50bdjLWwVCNiTb3pBo7plv4Qu2kM/M4yPsAMIeqisoHAqIUacQbZCrtTxGzflp1XcRVxgCtO/PGXr3sFjgaZAgDsOzfVCG8HPVntdqNUyeXVvHB/SpmqgHDLBN2JL2NMRhHndqBp8a8HlaN7+jTUnsZQb5TxRxl/mNgQrOQhX1YHc1pdKPTkYsTRskcK6nt/eBSAW8Lzdif0TtxI+LzQisKaYK6g6qyPS8VeWquFJsZlgfAVF194xawBK7SILFfF+2A5uoep/TADifsGy/f3IMF/cr/pJz/BwyuPggf8aFQ+LYw25U44h8TFB7QxPuIVHSPSrcgEoKfaDBeU5aVYgOPVTKQwaJSO3NR7irW8129BV7RDqKK01IFKQg==';const _IH='49671126e8061ad29613e98e6109230631ba0c07f1b8953b1e010981fa09b0ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
