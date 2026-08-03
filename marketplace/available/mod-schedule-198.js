// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpUT6zgYUwY1C+On6MybolH43k9Bfw3VLundLGDGBm+D65T1tbNJbqENS9c6S0o3lHcQWkHQjRZZjxWRrFJ+HAIvQuTW/+2+cpdyGuzt66ANDLdWe8Tob3DwAhIMfUFzjDTdwWuZVnMIfieGR03MV7EMIG28ZHLoFR+5l9mx7rA6YPa1PDZBjLdiMStfs5i6YxD8w94UgqBa2N5MHr8Pv37ducxaoHYcVWldeNLHdg7eSg1/+V14ElwrtDsf7bQrdfCgIYwdoo5MwhfZfgVUO5KPJAH3ty28hGBiBtDQsgFfdQkgCBJvlutq8F/7MWZ0hOZrTo8+FVY9W90IfYIEUkWGY+WD+ZeVnasZhsUdjLhwONY4gBIirtTdzaw08ucpzDl/lInbLMBnYr+at61q+CEV8MceL6S8GKhR2Gh9D8zbJbwNWIp8zqRE5h0zHoEIoSSBrCW+vZqv765loQk5gV0RMNMIArsL1na5FJuB3yQJ2Rp4s0tzDWzN3cGr/87Iln2TmSKqcDEPBFQWQJELPSG//+uapn3W4/6j1SkW2K5uSQQuTSQWo3cMJXN4cAWMN9/VS6qEWMfOiiGfTaPyLOUbE9WMpvB8JD89mtunO26YceUAj7p2/mzMOmrhJ01iiuNUs7sUUPqVpVRWfSjmmhSDot66VJaQE4lYni4l802U7wATJ3UowgusGn7sKkzERrxgHfm3IZKheL5FIWOmYl8P76aKByGIEDV7mIKOpzrhmEM9ZCXwO9pyx5d4w2FiDXodLxM45MQPPujtcJ+Dz1k29s0yc5Y2I5Y9OJ3B0juhkb2Ol52n2FsC3idEwDuTZC97NH6GlVvUZ74majIJ9uj/9vCDFw8Aicyxfg5VRTj8IVoiHXBuuYE+xj73Jp41oPmBbjdRY36+WpSTfHCsIQ6t9Er9LT6jlNDLcO9d6qI4+To9Q+CzoMSftLT300rOIDDAZ2CVvyYQsXRN4j5QpHQfyPPGGRJWOgv0itNkgTXeFBcqd5ZCtppy+b+ES41jtbfWbatywC7ay0nyUBUrU0iP09rK82nXTDQNAEShL4q7TVj/YokE6KeSf9dOggRcAkCMsmhrhuusf0p1jc0+PONO6kvp+O8bu/C5oylQ8v/w5k/Mv0tPQM0EuDJ2BbTlayGnvTFDZ2OjqvBdX1xIPB9lf7wTDJif+Q6AnOBFTehWFLKMP2Zcf2VSlKpO3SzCLkFJBedQ3ib7GBkx3fmT4k66FYf3CXU2jwn0ry9BwOUvCo3Da5/DVGLPItYNdFpyib0iuXqAjMyMn5JlEpUo4C68jKA3vxDCNAjE77OEKfwQZHX2v4AEbfTcxWqmU9FAbJYrZvWa0QTUsnnVfOzCBsT6TjerhPKpRfcQ1Gk5frI8Iv3kqRZpirKPG2uN1yLanHVfGwNNheJyk=';const _IH='3e5671c3b12d22230f629a1277f41c72af629c718cd2ea70e0a59809d51fde33';let _src;

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
