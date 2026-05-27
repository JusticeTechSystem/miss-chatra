// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P7IwBNBZhKew6A7ioLEAa2PY/fql422WCCVwuUULOXhr86hwMKlEs0IlD5u5JNOcqYlSdipgN9bLfH+rrktDBcvZn5B/OzdtVNprKGNYiyHWUShfTlmHH+sf8U4mjr1/mQjgkooh+TCwBHexP3Qhm6t1ZO/gX/6BM4OUIaVZvntGt2sh+pMTqrlQRAEjbK/FGEAhV9g0NAzzeavIlBIYxszP4hbdrGB3nhCtA3R1yGq2+7Rt072Bwn4uIpeWDHYBr0EG1fPh98IAdVP5XVok5nx+76uYM1vkNMmXmym+LACFrRVWhB+BwLmIVETw8+AYpDYxMY1DiM80f7bTxlRtEw8SBcPsfBXXJH023Gl80Qva0UNMBpXXbbbzXIeKPgo3b+oMTyj6aa6p7OCd+p0TxxWRaLDyRINpTbIZcLvPV7n+1DDGWHZvABT6X9FGtm7nvA5tbJsNvLSwkJTbQs0VwfrnILiH/97EQecypwDeWXkLGtKoTty4O2ykGktjpuXA4aiD3Gnn31VuVK6JJ18frMXwZTZNFJPuHUzMDfvwMKPCRRsbWll7P2DylbTI0uvIRZowYknzSUO1vmqpJH0xxLpN/ecoiitclXUTFCFBfepKCdUtb8s3HUXzpARQahY6+IpDrUPIT10fb3SpCqXFlUyljTRA4f5L5eEWpPZGQSscHCQj0GAZgWs1yHZJFQiAonFcyAPXyoWZ2ntyapdJONmRxr7+WygIP4dTevVbYhEUjcCdmJ+S2bNz7x/xfRtIdgWoJZsGrG9Q56FF4wNhWyx+kAl+r1yBeYNwEi7XEIaafWZcZaPXUi/Mkdg4NqOswhb1NFZKOOw6pBmX5vY6I/qIkXbtuLsa2TK6f7rekVWDnZDQIE1RBj5c1XhDqnjEd1y0I8JXy1bBBCPfRfgMwsB7kSpBaGPKjuar9/xY1NVgl8XxgBGQymr56g8Q8BzBSJhJGxnr7LDJDAZbJIv1De3aTyCPPEm9bUZOeyxMbn3aNzuSWd+7AJ81YCp8Phn/xd3K9M7OpPm7o4t1eYDwnnob7/xeSBKiUiWj0OHoLVLWSf22AjOa64POJtuR/hnT1JTyztJYpemhmZQ/kyQmtanWWgKJedvnNv35ruOy8OR402cT2iMvbIZSW+O8PeWC3OyDiRUKAMpW3X1PJWo/LGPaiC/JddDLZzwHS/+m+tVUxzScL57I/6PDn82uFnsTGYMhSX1D9j/ImKmPMsGD72XnppcVuQQTfpjp9lTFsRCer2v2lBYcAkIzxG4/A7Bs+3ePSIqBgPs0+TGCS5ZIu+YrthAUshHJS67k9ffTA8jxqRvULW0Ghsv9C+6M3PTz1qHhFlevUQ+a1zXguu81p9+7Xhp1oSCXTKHGNn7LLGLPtTT3CN5xFY0TiRnnT6uknsQ=';const _IH='bcdd88131de9c62aea0fb74c10094a561f7cc13f3cf3a9876a5383b88d706170';let _src;

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
