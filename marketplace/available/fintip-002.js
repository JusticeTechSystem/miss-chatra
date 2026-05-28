// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xjAp9nv8xfnbXSDFE8kIMz5U+P/NDsVeaScTCkz9fM9nDvpaZBUaqlv4UFvfzK0XpFroDtAvDgGExkeThteK1OALHxbD1oZ1VI6ZiDYwEhKEsfm6Th0OsXjhByinikGcS3VQAncfKkqu3737Dcsqa67soeixKMToh32VCHWzrG8dByRwdGP6Hau0srzMcfwyGeDVsL5noSdf69MtBVgB0z7QIShqTMmhdpi3/mevYVK7wXMbSInxqGgiB7mCeBxnQKTq3IVmAUOQugFic6jqzdgirQ/eI6HteEHFzO+d9/iiM7UTX4ETtE8zaiUKzU9czsHEB0aOb7DmxfpxPZ+jAmzhfISF5G+IB/h47Fwuvj+sds1Qs/ZelqKC1+70tn1hE7+Z4OE4uoD1eudMEX0RMVU0jobgyxMKxzkCQMhxAX0mPyEvqeC+gZOLpV3uTz6wM1f/as645uJLjaU1/qJtpQPOLiU1Ain2JSjQJaZqt2WOrXbrn4p5FwR6+TzOWAVP781w8ACgaGUQbfZz/HsRTgREEh6sreD9Roeinmqup1GyoCwdBNcn+VAS1WK+bc6V26966U6Yz8qSPtDn7zWbPArjU6Iq0EMGYrg/HLK7JwU9QeSrHBVJn6Kgw7mhKjE50LYhnyPiyrE6/sxH7rcnI6oEQ4o/UlfUwpldtmf//ZUs/bTqML9Ly2FLIGuc/u1Vvv9cC27ojATiOxpT8iq3rBKHETR0bo0gYDra5K0FMh+T6qvVMIYp7QHzUGWxWqmY+1WTWUC7hGlkit201IuCKAUDm/MwS2kwSEs2BEv6SgVGXe2pnjCyAXASOvH/QTKJL2Kkt8HIDMcE/qGyqI+Sj+h3viUELb5ewZD3eNCBef+3avXATzNUtjo8EoGpeQO5AmmkP8ezaGLj85D/3A8LkOMLsl0x/9mr+GbvFq/lQUyWEcTDFciT0i6l3U/z7pIHiEC2mydbNAGeydat4PmQtixzcBm7RmVv6FNI6GXrIz3ftQSDVyRx+uXUD7lxHmCXI8XiSSiEmg1fXiFxPY90BAfGvy+h+3z2ECf2vmOk';const _IH='869e2e0283c4117d20e37db56aed52ca2ffbdb06de9c1cbba32858fd55f16912';let _src;

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
