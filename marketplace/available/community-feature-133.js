// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOqtm/6ClDeoj9faFz0DqLcwvoK4CeVjtknDk5eCDq+wCS1PXwqKtEqE/SPRHeDLp8I4a8xr8v9HOXDtKOIHS/mv+2y4Or8bEUn+G4tP5+R5oaKUMlqJbiDR1llDksTaN8q4K1jlQU8ZJglQE3VSifFreEJPrVwmw5uWIAn0iDaHkitN9bfXyePLjzCBHNnin+tSKD4l47EOzkeme0ZsDPHfv2dv/8Wm0qKUyq6jXSv8fHa0PuOlU5h0hOQXZOaczH7Au59a6dfshqQMbNEdBDd3aQ+/rWoWYZDQnUjAJeVBuugxQaJTq10d9fQZiKdea/2o/kc7+bGivZcwTK1zVYF9aAGyCZnQebstAbAY1WfvrIE6/VbMU5As/UXRpCVOaly9iRtlo4OaWujE+aLIKA+TzWiVInwX/7myJ/i+gAy/tJjNJQKKGOX49CuQwjl+/B/SfsUKUrb7Ofe5PcofW2iRrS+ChocEwQpemdftCYwwUXPzh9LFTqlHGXq7yTb9wesm37OlXFkJCBMUFWOKM4HIYc/FW1pmKnCjlDJg91L9t9P5Cdeq2iVJyUQFmdCyoDsTyMCV2J0RYMRYxcErvOHbQVt/420qE34hTeIQtcAwJarnsAU5szXiDfTXIBwuc52yGqDrQe7bznx/9B/TZnVqBH7SPoVwO7EMxyNZoHQrvyNjpRbcieuM9pjtZ4lqSjGoDLhUvl3Vcanz0s4Kaop3yEzKSef1Tkx0aB3w==';const _IH='749b3deecfbaeed6f4b004ca4fcb6bb7008516a0f4712dc3dd05b3d0e0ec72c5';let _src;

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
