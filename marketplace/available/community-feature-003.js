// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L5fjup9y8sqtFpZ9WJdFz6is8SufyAjoNVK43L8hiru2+8Mw/zStRUVd+SKq6uujhNs3jePzTm1H1ZAxkRn+/scVcUYwZ2KyGxqDfW3mt6S8mtxxevcsAeaR4f7Ykrv7TuvLd94xJud7bTFZuHNKOR8c6D7W6J2T6cNeQ65Hdv7CrHEH5wQK/VYJuO26SIGSeX0hjozij02N9mr9zRbRaUH9Vcg5FDEMW84lPPoX3McSV2VmAkA4qJTbSMWE5WakSZ1uTEvVI2uPi+j1rr9IQGY9DzmIdVAaeiDyUq3PTS6bDmyfPw6g+3zOa+agmxiiSRh6atmdRFa3S9lpBNugHFuUR47qBPh3/ZncWH41+QEY4nfLK0l9HcZ+r+lkZtiSzeQab4cYf+B69G8pw4pp7Pb4SUBv4gc1yGD+6duuyGGGCI1GXcSGA151g8Amo0fIQLC5DEVjeGVD+y7IBPwCTRtIMlgBdDW4qJmL4qV+nx3hGPNXurYJtq4QHhDEQo5/MDOK2jcIFR8fUznE0ORrfmYPawLb69R6Rfifw3dBt5B54IN1iOlC0NWDRyXl7R9KYag+lyCu5qYhTwLfEZD2FmoG6KX8riF6HiWGZEi3B9GMRjDZljvGxMPJTWzmNSX7mCpspUxVEEocwMFhf4VXIIL/RShC2/PXDShTQLoEZeqc/kIHlK1Z1t7SMGxtmlTWrLyobEqBU6mJ+JIpsR7s2JSM9L6S';const _IH='c1292b4f973f15c423a105f54a5bdb8b74e3dc5ca9c201bab772a38087b52598';let _src;

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
