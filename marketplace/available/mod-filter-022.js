// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwLbXVxKHmDsnjfF75jXpbL4VlmGkAzqjEagHK6MzL/47rixm1BGyUGs8rdkmxXHfKoaUcXdYB4+DWFX8kRPerx16a0aWN3lvIhyohBlOSYCwEWLSmT/i5uUlL+1bwe0iyxSBdgCEftDRe6C+OCQxoq1ny2itV3wOKIb3QyZMMUcXtnKnNZDtfi70Pli9yJckQHbP4U95X1Ycwe1WlrcSS+1HW+L/rMD9NjRIHn3gZCqfWoWWAuPqdCNarTgIVBv8ASwSIiwCLNqDop/F6M1N5KUh+f40kYdh25mXNU5CEKGOw9ZlyZJA4Pu7IQytEFXn+wTUaB3GVObkgiX6p2NecBMwM+E9pb8N6LQ27AX7lYxAosYHt+bFAU2Fze3EAKfoG00nneKuocBzgbS0wb9k5CGhxT2YyFgN4nPQXu8KXQF+sBKwepWxIT+XzrhqEbRNAbDXC7+QJ3VuEBQnc1GUkelhnjkRdLsqwpgUVNAoF6hqdiTLAUpm2A3VIc2PJOhk4W0+Gem9YTpyVLMopgOqy1jQR9DL6x9pDlEur2S8P+eEIJjDP0hTIV5F0zCuIVwk9xWG81Lz15DeJafS2TC2Ak7KZY2JYqnLitw73LuEleXsMDi2fLQPBvEk/OT6b7BFvHidTzEywlL9TLfXR2QyxYe1JbC1ppidYftXBYQ0uK8ptOfseN4/MZbW338brVanmG+zTq3ApzweXJFZVAv4idz0yjakhNL6sYV+/k6sm3uJczE/u93O8N2dy0Jwbu6R9WGEcDukYLa1i8M3slPcRkkf+gEUGI37fS6UHt6J/pIQPzmX7G/NN97RoHpqXKo/8sQ6t2xm2HGTt0g+BZhcNMubTLm/fOj/Yxa0NtKvKpLf87R5WdiBrEJ5XPVsdhuxo+rZ362SCUS2hS3m3EYulKLGvenucaRXAdW4r2v20PlNysFXhl6Vt2K3d2bz7WxbjrLSw9Y0p3VemCHmjkC4yeYb2PvBideTTZ0+hlYPXX7W1CcxPNuylhh89sBMfkY1/PkmXXWbMM+4T5E+kU7PMwfDyc2dI6nJx0cW1LP9V8ijsCjfMyIYhKUErILFMpu65516V1zqutS3TU7/nBWihMBnErptlcuAJYz8AsBZ+8RhwNvSx/MooCURvt3MLiCSDbkjYZIC6hkpScH7Y0eP62CEv1hLFJjAxJ5drIRZRlYVpuwOG1gW/ZLZsdL3ZU1PeIE6adL24wkEknXi+UU9C3Mrq9GpVoi+7xqOXsZ/SxU1KCzgIgyfSUYDEoqChIDxOlNx8d9i6NeyB1kr5c68k5o7PM0Zsp4B3jNVcn6Us4BglAx5T63Tu/yXo4yekCt5qpDVrCFVZ2L7ivizQrlZwUPGRxemI5Ski0e9Fw5WprdeX4b';const _IH='81237a1d40c2ae1eaf922424a004c848a29c56e522e84330cc3e6a354cfdd8b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
