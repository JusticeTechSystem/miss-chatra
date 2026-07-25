// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTt8AU5hQOIRnoFBXII5pcb+cLzKtLNSvR3JZPV8HbAfhhud61dminmrkem6C2pu2T8dEUfsT9xrx/MMGQClDAIBnaSZp9Uwpu1FYFX2j57ZxB4DRuiOTtQkY3YbQZKEt49wmfyaDfxDdJ/jqv7sVJNz2QJWQ3/XaFZ7063Fw4P13i5seNM2EoRfm7IghaZ9IstGumX8RYSHe4IhoVcVloN+nsnyIzlUYpYlI5MPQNX8T9/w8fLIUqDlGwM52yc+TlaCfXIXHCb/Myfoj+MbN9HXrK87bKLwr5zrR6W0VE+SOPMdseRnj8bMlJcF0ZnFK2qWIvdk2MiZO9BTUQCJYQroUsvLeEfz8chYL0T94j+o6m3nmixNNgnYWc967H1e5t0i0chVPEfv2D35+hixf7tDa8Gc/RW9QELW/T9u4a2h/iTvYhJ2Z/006xGfC+4vBaCjHJ0hzHhAJhtM6MN4SR4a9ArvqlkI8a1jsVhQSE9PRfxuLujAE/iGd7cfTR5T9oclpFfFC/BMpeeGYBuSME7gwsPHM6xpNA96kU9ZTbhNsoc5vYRVBO+pgy2i2bUaqsgUXo6Qz9p112I5JpTohCywogrsGGpMX5BxMhIelrEGGEYWnl9ok7cmLTHwWRKdVD9Sa9fDJYrmqhBEMCLtVd/zyMqfqXWDjEz1c4KpnaCk3uQtAnbL9+Bg6UkFNsq2IjpXLdQ14+25q6KCwD3grK48b3NLpB/5LEdWK9ohcma2b3XPCzL/RDgSG9VH2HMeEdSZjAmgLNRW+TGy9VKOeDsa0ycyfMAaGDGcoIAPuwnpm/PqxDUF9U96pIgt82Q6pA6lpF+Jor4VC4NGD5bVS+PxIpl8WpbpeLclLnbK3aigEB1leeimcRITw2275KP/u5e6ySSyqgCaII1jPDLt6GD6ld67lv0DpYn5HSCUNsLy6cPUaOJEPjMMQPcBwzR1Wtll8xrc3ePRU7Qvlf/reMsIFS7m7utLcE737T7QxEW520wf/JDOAZ+2Pw31Pws0vmA7aB9/M9YdYVVFYwcast/FK5T+SJdD0ub5J3J7Tkvsa/Np7rTnqYPVIOpPyq+Uu26mcQB8md+tJS2SdPpU03WYInZnE+JhC045I9TaquC8bZIPjhTqg4cCI49mLsl04Q+mo8SRs+WeVvQUPmtEaXgMMxbTCRpLZGoX3BABqKerApqfbOuD8XTEu+qk4702zV4PAUsgJvvpg==';const _IH='fa4ede268798e2be5e4fc38947c8ddb942d4c91c215d4445610e0c75393c3e7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
