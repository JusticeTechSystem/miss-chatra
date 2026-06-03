// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4EFIA0x4+ATgVcXog69vFsNeyw662Ih6/ZTjUgGUTYZ0G9AXJGnzuilZqUfml5V75cTrwVgV6uczEpa4rNI1E9liE49smkQGmN+D28zNhk2NyUg0sH7mvT7VwBjRLlG23VKqkwRmss6Z9vrcZhnM5GfFJnxvCL/eLyrz1ytuD4pFuXG4XK6tvVsobkZC5Ui0tVEf94WJgp+rHvgrd0DFzT26qgFdjqcq+8MC8uuCRkQpwVP4TgEVcsEBBYBzuvZOicNZhQMNDw0RqNuf9vaMaoUhGtbP3TM1kclDiAc9pQpJ5wvotinpkIFEB3QaHs/Gy+dO4r0/2Hgc74ws8Pyd4L38ychQUtfDk98x0ExHcW1fZiMQdkRZk4O/Uamzq6XMtteO4fOJ5KR4PRgqoDkfMhngNXcxZFyhfWCUoyIOjKReYZAzJNjrbtSMdeOyWw7rRmJZjCOi1gXVZvFpSubWSsCUi/TYSZmdMEYQwArk54oGaXf6YF9RcxXF1uRrPCNlukI2YjHpzlgV2wZ/2TixmeIwaIF1KsVDEBArn06WcETS2AbeBPUXdZPf5qRjvmaBicqZfQOBkjX+mVQVbHLBjLpDw1NP3lF0lT7QxAzydJW01i2lxIsgE4/XFmk5lr4qrD+/CwCAjiHG8WVLyj0pnr2Z2NKY1JY5TIbryljvv3vrW8c48bxHTnHAM+Uds8jsNgQqOXYgEiKVZu1jOL9jNNWDzu9T1uFDOYX7rpev5oNfww==';const _IH='18f7da8218e5f9785ca98ea88f575984692a072bb680b2bdf99adbb24d5386fc';let _src;

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
