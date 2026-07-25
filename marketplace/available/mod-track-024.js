// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnI2SyAtwBfg3oi3lpaMsldbvDV5gx0Ad0FY+ExAeLPXA4anTQZEftCTqlzEGYC/JvXvX1GXxjsTGdC42rubhZ8KaJF5GIANGOD8G5c/J7hdtrF56EZV9HWdtjwIVqgCI8P806x64wjBWX7hv+yikCa575BAUwDQ0eOXRk2r+4AbTXnLtcnWlhSGkaKAIHiSSndr7VJcYwshOB5aK8rnHravXuZyHkB/QcvDV7D13pfVkp+/pMNggBdXala6jzkfKQMx1FU2Wy6Z+c/8LNca02YSqj4hmxOVCdnf1nfKVIo1U6q+NBghNR+QkoytVenRMYgnSe6pq6z9I3jJl97cNNtlDhnW3w+ZjxUS7hbZZ9i5sCd/OSJuKNm3mHolxDKwsYhch7JnNhK6n96gv1ArG5ADp8zT7VXWgzt6/RVEgWT3IesbxFiq046C2ToCDF+SxZSIjgM6j560Ip5aR9cAAJjRXwEb+kntnNfp7q3Ew35d5GEsfnFYbpPSENmq7kYkSbpsRnR5Us9S9hnN9RX/4KwXY7KPt9EGKdh7k0IRydyGysz5N+PpLSVU7kxCNgO5T9sGlqlQ9dVTMt7NMCOlv17KDxCI0dZ6d15iQXJYohEPjn1CIm2Lz4GSOj3KBxPVvXwiPcoy6ZMN3G/Fg7hNOrwsVatRMQxsrHQw9SEog5L75SLGXUU/pQz8LbQNlvyvxo5iQ+Ep7+ON/MWZKmz4/pGXSAxiXNZNhNelS7fBWEQKCaHBc8sOUqjzzQRXjEwJfA8aRj3sqPYp1W4ObZ6HxfGY37iKyoPEc8kKQTWwI8UvIFmL8blQx1b/tSAyRwSWZBPw+BxSu9IYz9MtMS5B2ctkfGFA+rB7kgg9IMDUi6Pn0p79qSBDevTJ95t6gJjL3LsH1XyThCfDTjn5GOvai9/19As10GIdqDHGIklk63sdpJxDEWRjKZjJgQSZ1p1uQPQWF/jmSzj7+UbcgIXixiB18MAbAnFDJfimAzQ4mCyEFGe4Hv8BPhIp9+E4ksT44Brk3USf7SKRQpktafWZOMDCbGLBFKwhwBKFmFhlOCxkFTwvssdqjFBwUv630sOTpHlSUjYn6BFLRiP01hWJwmhgLFcfJAFfA2vhPB5gRn4pwyajBYGMr+d+9ZwjtINkBYpnnmTBIEJY4YA8Jb1ComzAqxq14xkZFqXWrO8I6hc4GPumx8UrO1lsP1i7sg/izazhbI4pjbxafLgyRzapJf97NgDLco0bx5d9hMTcLhBppe51Rcx6GhYHlFosc9XxBcORdvobKT7Phq3vbdgcHkUSbOyQfgTMHpJR4L2nfr2e/cwWYwBQ05/caNp+3dEzipurLxPAxFgt18o5NTQ1nEM3obLGT6x6qx';const _IH='9d9d46670a0b32070bbee20f23a6d32e7d22354d16cfb28b543c55dde6640204';let _src;

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
