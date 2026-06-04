// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='njEvFBTIJG8nfe5w7i1ltwWHYV4DkM5i1EdNOYlYcTGWJTNg3eFQjCqlkdEStC3THJGQGIfhdiNYbmKNT0A0lZQjjdlnhALbrHmsu3CpNNp1hkoSXnmQFCAIHE2qRP/G+LtgZh5rM2s3DzPUjmKusIdR0tJ08sHkRDhh4knv2WYEmErI8IWD48k0QybiqRPsbokuH5F/1WC6Spn/DkBmHmAo7CAlXxfkeSBEl/1axwNitP07soZhDoSU0ITiJFfUtQbzuh9fvq1sYzZvSMdFRduCynhm0Yg5JDxHWbC7WxijQEBV2t7cJ3vatpdwX5gcFcG5/b7BBxnkvaJ9SNEsY3i1rqXcyvwWSc65XHcz+LmsjmToLSYmhFv+eqjiMSWrWZ2wKbbdZ8rrgvvNXl3ic2d4+hbQWvs3rbsHf1k6CDIW/D5P+L8Ubfzh2f4+MkWtwne410C16d7Cz+ETVfH4L9ItzI03NEvn98Va6nf6gaiekrTBSrKEq+KV7xlpf/Y1seCwVPP5Jhc23e18hYCXOt+qCFki8Hc0FlqQJB+0rK/duMtDhe632TeId2K7ezd5sDnhF6FmCJS/GX46NeXbhXMnbVtwCRqHkO+f9v+pMtg5qx4n+98JRfpHEQHMryOKOWN96jUqwNigXHTX0L6IT0sozIZYrR3ry5fjUMlP5mvmTobcbT59A3Vyn67H44C1+05hYczXJ+YsNdrNtTaN7zCxcxwLwgBck0s5LdR7D6kFbZbnwgh1tO8RBkYSbOtHA/62ViR/wy20vsr65sGJ4kQeiWmm3L7FBPFkCQMIGvb+ci50S3HaYDYooQJumwCx8YKbylsMauyYMiimUdXACWw5Yi83H/hVU35TCyPaFa/CAyEA8pexFRiF6rUC78KZgqKdUeeqJ5jScIWUKnw4Wu5kqzAEDwbCKDZQ1J/Fg0zAQ6TAq+TzaAkTu+IWyF4rktEl/ySQqMCF0I1rwrcPA/MXmKmeznlo3mBRxeGSWQwCjAIM7QTxUuX5G0fbjtEAYjg6P8BBDC+JZMlW8dUxnprXsGuMg5lFTKYiHNm5nUkF49U5FJIre6Q0PGbPXpQtbSXvSegpcx8R7UqYwsghPvfH+LKW/OK2WlDs0qGN5ICMgnNZ9Ov3VOu8e1YgTIoN54BPgsZSll3jma0uwktcshY5GtEtdvbMpQ9keTRQ6g+DmTzLq2JkjyFy9GudcgoDSS/ALDTBMvub6Z91ROIy5b+OEI2u5etbz9A7ss6ACqNGxglBuWOSIw0EWmA6Ct3eNxnkDmB50nUp7s+4/Bn18CKRTvHiH5dimIh1/Doy+v+ShDEWVTciefCBBA9m95llkgo43xxLAIwSUbwUyQRyhFboXmebi5q1eO3fFCY4QHHTRrMZ7ZhTThEJT0N85bW31UnefgkYSg==';const _IH='1931a88d7db22e1da1a17acc30c4cf8beff339812e77ca5b3cd269fd40095293';let _src;

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
