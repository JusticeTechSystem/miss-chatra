// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nl9IY8rnWI0mEkkj2e4KHpIiTXO7FiSYQ+Pu85ACHRgsgZoC5v7s02QHLF7rXXr8rrQJXE2l3UOSf12XcdcO7gaQNhEnR+9T0nfW8VKiaEcRyraq3zQAZ8B9/SEC/4XXhykk8quOxMRceCTbCPwnL2oIQ4Wy4FP8PbeRj4q0Vi2P+PptXQH/6zCzfxX0Nis4UWlGtjpV1aQlnBboO4QI8D7U/qwiFGIPiPUWmXxPa3C8JZ3ZbfrVr/d+LMpkS8ecMG2s8up9H1/HugqVAV5G4O0ooK2t0pIbjrhtCq6Plah+t8YaiZP2pcCadSOjRRbdhovtIZSsNvQOfphPUvBe14p3/AP9w4eGK5hGyLkmzOT+a3TwK/DL/JDrIKKJkaH14uuvi4ljm/nuohEVqu2K04A315PvvOfd4CsUfUUALvABxAG/5YzbhqNBU922Ueoh63MmLq8iNCkSapPZ2xiu/TGYSuYt7ZNHQA+fzIh2TNQfCs3ocmu7iLN8Vrzo4g4JhyQvJevnNSB7UAhBoLom7B5U1BELsdliNoTyw2+XkmcN9x35Cjqu8/Ip+BpZy0za0AHhiY1oEFU98z7kqzOaxDW2Vf4WVC6hEVS3YFElNpIyxhTsv2GD91tzDXj1FZbqdpDTglTZKwbAq4GU9CvWBcvQWdn4O3zhq1m1i/f6iDZMwjYcjTgl0XhCI/Caw0eRa1TEU1C17YsbSdlUpxXu0NDp54M38xR2WhxLm5cJLg2AnhNNfVa+xqyG6KajVrwMZUOgzifc68rymsdRisHCT46X8D6S5uvmlJ9WZk2bS3pIXCF/HoTznnju+mVICc+X1M+GpPLqKZGfFSL3fbQWDcpQs4+ImbxD5Dy5ELnQRQuoP2C4ZQ1pFtSyJ2hrTZq/Qtb392k+xx9rAenWqSoBvnVbzfIGlvQfK/gcZtstVF6NRn2T8AjKRkZ8Vuwf127yrCRcumF2kvt2xSjFtLIr+BmcT7JMr3NaKho1kZj3Lg0sGtxI+JtPNvVRXPShV0E/LlM5oLAvU+Ih+hLB/hGEWtm99MVV1R3Ys67Y+7uDNdX+3k0pA3AcNKT/V//Uz43x42qgGVmYypYqPTT8CYR3+UYMxPK7aT2SmRXt6749HI4N02kKmj5PmeTrACb1I6yEEX+xrW1UqblJ3dLRIHZZ2F6BNuYodbHphJYCBE+v2UZXlvfMCbU0VFnjyxqJchhDxSN+6WKG5ATwh7T6VQrryxHc2DPMfrJ7uz3MUJ6AhCeA1xxj32HxL0B1B2Al9YqSwg7VzoeTH4aBZ1uO6kiDzYBgi8AxopTCCz8Dp23GksFb/r4fZCRBJ+ZGtlgrfMzH4KV6/isDAIH+hrBK28RKY4Sten3dqXBMeJ3baTxl';const _IH='f5dbe18fdec7ad46fc63e3d77696710a5809d4e94afad1d4492919fe3d4855d9';let _src;

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
