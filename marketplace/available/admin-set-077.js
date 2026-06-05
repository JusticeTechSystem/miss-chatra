// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UWUSBsTOIjEfEKWOUwcB01c87od812QTNl4S3I1l5k8vLige/pJbVl+ZerWPWHwMGXBB8Gm8qp5uPB7MJu6kZ8vDVYETuljGQl7ePei7Ba1JA0TixB+SFEkw/s6MwOpkHPj7e6IXCE/VDRbt25BiFVClos/2BFi3+7dBtAVqOCIw70WzWL8y9CmXb2nZMuKbK+w1j6wMhjQKa9a7PGuRj2BLfrHYaK7N9dZVyigwKsE9E4XGs7LRP1nc0Vevx4CRNb/QhgWt1onGli5zUB6Z8Re3R0B4trUQqkInK8VqqW5nl3glzQXMnxMUHdAav97wfYHsA7a27b35gn5FRiJ1+sGXDYEGUV45D722vml/rNTcoDxHUkvgAEaW1NXOBhpvF277bOX5Nckdz5BouAYiBxFWccvq+SQxArYEbWdiiXVR4h/IjfNtmYd1ZWii0aVY96RIi3AzOBL/zfs6N1ShoxXDkWx5XaKgFi6SktxKz3ue3DvNx7j5WihXu+0i7kInPaYji8OojuSrkJdbiXV8Io52ILcnNq8e4Xrq0/nj2Hs5W4KTB0fa5Y9zdnj+px/zhz+bLPHbuPv9J+xDLUYEO88ChN8K9lgo1MsPswQy8mVUyJvDImrNXtfcga72Tj9vqCC7v1EqWo3FLib2hOmJkL1Nyq+IHco26L5XvLTO2o2qUmiavZu/SvPLGagIGhKCmhiBwckdHrNpTB2lgsy7ZPbX2/fK6cmOrDzQ43AKqKMFG3ExlQT41cgMQyV7vd7Jw3a7NlIBGaDNT5cCjwK6wO7MGrXjtfbrXSD9psblm6wswOpY0Qq1tqQFFt0cRIJlvgDbm96mf2mpBT5unnnX4VWdMg2jQz4SMs4y+HWiKE1TH7v1d0DsuwBlISM8qyPK837y8syCbOe2oMiOrZxsy8ik5JlRzoPTKRy/hqX8O9kLtFSBEaZqKrKWWEFiAY0ymfbIBmOMoLqiFHEXY+InjvcXuFeU1v1q';const _IH='9eb8dd7d42f09b540cdf6116d52a6a66a6cf66cda92c87e56db8088297f64c21';let _src;

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
