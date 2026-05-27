// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1RvAgSFgdPthijTHOngLHVcO6YKPNED4bqEV2lvuTLgnzKnykQzN4pgVmuVSopbWmrDMBxsCuXdBSUci81w7aEx7rU6rSnxMaObQaNcH4U+HbxEsBZqRQonLXGkmm+8eUZtOj/UssI+RZpoT4/PrAfN1K+ux1jB+byj1OlBURxEy+pyqTA2s2EC5a57sVFj08ybealNAYQXl0DaFLLBU8BWOCqxj+iY0iwBUyde++HIPItGRjiBU+RIkw/ifvr0lBDp24sBHFJFJdar8I0JWJ2r6ITzOxN56o5cxylfZBr7TH5Zxm8trVZ0hqFVgyFu6ywl1SmldML3GmirQztXAtbiJgG3vIdY4h0dYvzCXIjijN3dkJy8Pgp0pdAhQJzqRZT44bZixN0wRvPpUIPOnqXlDFCFirw75/+2q0XaHOKWB1O59dcJ7SvXJ+cvwHkHMa17y+yZaaNCDdklZ8CF2AQPxQjkqSr5I+KvboRt8XTN7EZhdzYcR1sObDKyK/jBkwOxnLyuQF2OcuEvN87Enqk8zZ73P/b2daLQFN7SHGAoIcNIrHcWtKnYAx4up0qEgG3hf8GT6SxVAXx98ECY+vR0LNkY26YACWBlMEC/bS4upnG7f73tVzS9JUs+gOyOw9hHRlwYodx4/sjqE1LtiyGknmAXW95ZWpPPcSnYng+o5aRYKnGRgy9MvOfoUDTpkoRorrRvGtq1W+w0OLAHhi1aYbZa5xgLXpnQbGNulGA7flPUjDYibw4VXegeWAAl6xXPOQbwN2yjuc6V1Fb54oTu39FEsQ44kxdD4/TTRraMKTnGuWRCBDBZ5ISvWMQ20Ugray3bynLKd94AP22MP9FlNLYyCz2xvr6mpZWy3sbbpQvlaYFHxLextMzn3mHSJQRQRYGz90734EzjQmsTJFOgwnJQRXcvomJ5PAuExQJJnU4XDXaxcAmNtD1gOj+030au3YJDoEnLm1H3hYc82Qu0unc9CPV93gxwzFGyHOkyB96crHAR/jKy9W553ILILqS3gEg==';const _IH='1e3ddfa84ee49f5fef0e29a37c6a49135165a298c1ae5a0f78a8f1dbb7b35c24';let _src;

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
