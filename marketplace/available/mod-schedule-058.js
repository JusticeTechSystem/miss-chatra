// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wbbUO5Hcmm6RoblBBv1f4I5EY04LtP3aRA6VIzY6o53ZBQKfHJCucy2TplnxWNm1Oq7sA0uqbji4fPldfmdjcJNHwVr84SBPI9+QXUYafwfrpl4CUr5NrlHgjvbxEQ4ki9t6CvTLI5CXIJ62OkaeC+V7a8OeWHV/pG+gG//RLAEEYbkptpLZtDBjkWE6GHTp2dTZ+U9igu7avX2Lk9NKIdgWTu2Ps3fb3+0lF4lDrooivGfBdNQ81KnkUxcBgKkrmz8x1EH/WgxFfrny+9o/Quvhc/iZUSOcEQb690WJ0QfMUQLnquVxnW3ypeSp5VYhCS6skff1j5sKuaa4llBrl5sYVUFGR2iTS1tbGVZzOuXa93pMNxEiKe1nU2FO3h6knv+zI4HgZw8A3ETB9OTLBrteT8Geg62tiEQyK5DAW0wIMkqgxq0/vIsb+5k1DO6k6Mqoq0Jq1czqfm5yBEDC9K9e/7/K4dAq0IEQgDDVIpioqrTNXOyQvSpKNWXbCJBDmIe7+ZrYoQFt3HeP7FwftCc95GVTrPrncSIXIOsLWKIr2iK/j0U84/FX0koNtBP+rhdpuMluITgqVkUrt7WmediVog8MPe7IKxFaZGdRkKPg5czWxrrMFvl66kZl2ITFpiCb/l23EsGCKWSqxIWU8fJ4c+y+zvxu26SUfZdh7GrZWViFEjCKCBsbiWPXbIO9dwJEus7Y+aiqM+Aa/NGKSZ7MZReYjN9ISesUsrxll6zY2WmNUPPBKceWXaLarDu5QRXMHwJ7R71yvlWzGn9L976wgRhNbprwWC5rupaGrMomQh46iTADd5Bji+lIRPbIW4Xc/MzEnSg9VIN9RB8PY0GS/vxypHJs054CETwRbyG1DG3ry3FpkNXb8ou7sFGeQovrOxTLMsy8xkIPrNOr7Ff5cjN3X+cTinM7x7kDz2uOz/AAKHEf0rDu4SZljYAyfV2n2dbWMIngEgg9dI9ukrcsKqzaG4bUU/W9HmEHUVmoD2+8M1dW9kzD50KZc7oDhTw53gOu45ks4kwSpPlPQPVSiKUkR8ZLeBqagx5P3IrrXM2ZhlCDz6eRj+0e4FAN/cSYilOwOTCBSvYrzG5FcI00PCwyOwiU4SXzZWLmzxzmTU7T/8EiGby060fZmMOF6QKmp9FpZ3G8oQfPQS4EQAe8/uw3auDwwEnjhTyt1IAF59Z41YOy8akSPWHmHDHTLO8i8xhd/1RjvCKewMnKmPjq3hgHVWcuFCf9NvtZxxcabuLIju3tCy+shJDKBlPBXwQ3AeT8VsOEHJlvy5ZukEaLk1quazCyxUU/kSPjL9KSZyIkmbqBOnh3i6FTkW/kvzmq1EWC6YHn8LZyJ8QahQ/QDtqHsBeDxpw3wU76vc0f1BEe7F0CMOrFyPncgHKGbNgRUdYhgg==';const _IH='cd747d45368b2ec388a49f29b075c66e65146f812d47e2aaca071d87ff615c22';let _src;

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
