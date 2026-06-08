// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CEpCfQp40809BtDNx1xuFJL/RjOHShkEhCLXnEBRv6OQSbQAukP/7b9hWNay/YMi0mml/IlzhF9F7zxVql6BwwakVbO49x7KVw8+M/OSU9FR7CsAFmU/xmmS4Ke6qChDU13btniNXXOs8ivStKyUque3h2ICKv4jjVy/b9fUz2LCFTniSFzDMBSAXvGlOkAJmcTDc2i6rxQ8WdoImajNiSJLG3lTXgapSoD2g5yD7GT3ffK2d2m08vH0ykQ/8DnRbyqymxcc/B0WOurk0l6oXmOsHN/XiDRAeUvkwxRc9BAKw7GsR4+Yo+s3jW7EWgm58ApzTMQitAzGUpyyGbhd68a1Aww2wwCKp7+zfKRgERc41r/b2wWdQT34wekMzBokscyp5+w/nzlt9TpV3jPfOPh7Pz4cH4nW3El8MOxBc7yhwL+h40L5qHvvTEBV6kKLb1mkkDTdXbCb1nvGBGvkzp9ahbpjlGFNdaq5igv1yyllSdh6jVL+BwmX8uVrvCHOi2kqqwNuOPIrCyCR3Ngwj3mTPCFDezMWZxENnlL6O7n7mpBwLQN7RGdvMIoPboCrOWxWkFvYbsX6WfxORe5Be3XVc48r99Aq1NLhe5XlhTUhLaevaFHKcHQcf/4ZxsN2gyELAJ9WBGmN5of58nNO7sTOn1pt3z4FFCoLnAD16UkxaWaRC6f18lnrSPHXztBFQrrx4XFGF2Narmx8GUnprwK9LTy+e27MG7gvd3bQeiUeiLUTXhUrdOnNuHRQUFUlM35F6j6wEfSsqWTa4ATdFk72GrlNl7nsz51yE0qEskf7xFmiIRmhym7d4Ste2Wmb0w9nyS8F/jSjyagfHhEl+qbPtYN4u5SwONqtmFvkQdOrB5NVyHwtqR3KyTysM4Br/45Gob+qYWFy5vQbtZhi8Z5wmE+bNuYv5oXUz5wQ25XkJ84saRoRsQHHYPcJ1F5l/GpFzVJ1AwnF0RU3TZU/m4e9ALUN5yG83zC8kAtUL6O4LUp1GEDLjlfht0L2R8Ai33dJST0lxg31FDMwwIBQuoW4Gba6CJmgHHdRs0Vgk43i1QZAyfZYCRcvVmZT1bUa5N991sUu2xgVKNbkcla42VxZg+USHf8huwqBaZEagyfpEZpuSqLzEzQq8OW3M+Fap+I2pzgwEXcfQLjrR8sbPNeGaQLjA1NdUlnUftUV4djlfeky/F2VL6VCXviguPcE/P1lEgvUpWbsT8LWuxGGHWd24xEEtNy7vCw4NRUsK4S3m+qBEAGFXZ8E+LvFRGKzUhIuMK+ikuGRPf/ztAHiZdQDilK2jxVKjdM9q6vuO0Pux8+dGd8iG2OIJcvr9KgoGO1n+FJV6R2dQm4WBcwj+6No54UTYzKBsvpD+/BbhG3OLzs=';const _IH='09badc8ed6de40618074179cf9656628782d93b9925490b5638629fa11ce6361';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
