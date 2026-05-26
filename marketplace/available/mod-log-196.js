// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H3l37wJuk5/wPZ2ulTcJHBD2/w7QRKf7fTmLcizLwB66H+Z00fAsqJ6fk5RUpBMlIb/HpbRQL+jmVF2VfRiYb6NWCIbV50hu3rQ6CGXeP1IFZDzMYaa5Y6Xzv+47Eb02b74lf3NdLCgvamijfZ28qk28RUkJdSjXqJelArqqHAR/aZZ/du7iaNQcxM/1JyGubRCHfRPYAM0Nylz6SKpiYVJ5z+Xmp2P5VfY9YQ49QmaSKvJNkeErhtzb0lfQLJj56KeTisxAPbKCPp+vf0FV4VJjqc/rHoBzo/dimhipJCpu6pNkVW3b5cWFQD98tMlMKsPv7wHWdOOMsc++RlwaU9Xiq4O+rkxJLpIGN0MR/uW9qbhbIN/CQ6VlHUgrWDA3D0d6vTUOeGfY8HDGbOOYpXaoRzBcPce2T+xmoDnnzuLEBSiQSOAJEKLOp8hbQQc3ASrTeqrOhS5ZQZm8WHuV+E59VOeatzdWLbkwiaCyWEf+PuXLJsQrx58ssCR3F7Bamxs96DfhzR8IU2jJe+P01Gi4/Ua6GEfP8LInv6UhCSPFDi8sI4vu/QyBUaAEHT+8DuxgxwSB73DwHRPuzPPTz0Qdr1ECzwocr3v1FqJMiZazAuDN9sXvVD69AKeHgV+0/PP7sNjYHwL8+YM0bhR+5ggLLIl+27Mc4RsV0wd4lppoaBTI7rBZIJoxEASLURhskSVNIrT4RcdxdgP/wh9AJHDW+TaWAaPvQUNU/AMN0FBCvOIMSrI/Qymkv1pbU3DTHbEPwppeRXFuLQbsv6TIIht3gghKc4t6plsDVVChMZ5TDzUUDtLKh/44kaijeX8f23GIajz+RAILRkfniR5h9AcCq623BxMrRqcDX2BlGvJaBsOjgJSa625JJf/crstMBvH98mQi+oEmkG0hpHeq5AazJQfFlqUMNSpYZ9vr/lXuMsIbHxPmS10uwOji8jsMHvl9aC5nF0hzN/SJgTEZEcfj51S0NskNo7tG7bCVDGIWvXfQ4902ycoXanWEZD6xusG5egZa+cqkM9sLgstLzUL6259Yb99LYsOmqEgUcYMih9r2XUvl9/4vTCkgBIw/uiAlSjw2rBFA/lOg8oPxgk9hHXWClo9vAochIgyedpMXAtbnFf+8KWsakSBTVwVHVTMyuxSL7g8E2PkF/nNLMV5SHX+tvdw4WIS7/jh7eFERxaWyiuEknDi76Mv7iSwBpxF9DflxT/FGOPSeYn8vsHOqQuB5wB+KuuNqAmWi+4abifRDwiEN6k23FMAa4AeseQQUS9jlGu31C84cL9v2ftuqpYk2U2AcKqrxCjXgyqG+fIlTHUFIN2NDmmvNggo/N9Z1LqsvcRgdrQ==';const _IH='5128aff61ea4d3b34a2114c9e8e0625e2f5cfbc684eea55b96e7090619dbdb78';let _src;

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
