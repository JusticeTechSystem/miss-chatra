// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='odeveg2LQ6RcsGCKW5RYVb6DVqKvBu8WfzvK8A+aKDLkCAWOhvLpzcfrZl88TZQWt6wy1qRglU6tJtEA0YKUyOH5YhBA20oPJS3GTf3QmqNJ9W8Xj/vYPotYtVTSMafi/WHDb1qOZA48ScyM7SDW2QZGBcakxF11JF1IPxXB1uP1r8xN3uJ3CQyduSfdz4/vQOz2XXbwTM4oQ+VBWOrPVciAHq046oH0rCip1efG+2CYFJ4DqlY8q0HGbyenjdK1wZyVs2Xj7Uykrs4/g8ulGQ16P+ZHYujNahGKnwkNmkYUPhX9G483kQ8oAWnSzpiprpkYSoTDhF9JhU3ywRKts+vw7D37VfZXvUpDneIGac8UA/6aX8AUEIff0WmFRJrUeX2HwNMvCxVlmWbk8Cu6vnv2iiy5JcxgbVa6q1GCsMONki3qJDFK3GDuwVNvjau/1VNtIJL8CvTqWJSa0qHDAm3yOUJ7iSuXSPstiQd+rTJrmkHVHw0IzhueHs0qVDLW49bp9/Gw6FmMLObOEcPiqieI1ZyBR3hmGYI96EvCzPpzznpzALnugvJkL+zSrNk7P1bUalokicXPeYR2D1rsxFzqdohmVMLwY51rrZx5ULbpbnBYpDzbP8HMEF7AqNUsBw5NJLXUFZqyZoXHGs0bxLtFF3BARjazsn/2iwb9LzIoTrLUXQy9mH3TJLDXttQ6ckM4ndbPaOXvxfilSWyVQcIRJRb5aTkU';const _IH='652cde4f61394ae5c42c88fb5ce8d4ffce0c367af4a776d313a3ac8650d0c08d';let _src;

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
