// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RkpG4E0ZRGtRUHcIOPexE27txmBfqamhel/s09txcXfqBcusPIzKguCbSswuzvVc+M3lAGNOMEOxoR3EB2IfEp2B8oC/dP7CcTPpQO/WZt65ZamSx33/QpXkjhbgrf1451FVsHPuAo5xZaTEN6vitwPKLxHI7NARvtelHGfD/+ftoyrsjnh5rfPc6+q0aZIOJXljvkaghE8YNhbQ3oekqSK7vBFC1ReEj4PV65DSNYz/L8EIeOPA1HHNUO2yHD1dF2VwJUTLQ2SsvKZPBimAeM9giI3nv4pbdq+65rVn96kYb9cDnabFmfk2MHgCdkefyWiHJ2TcSkpcXGcWRLqjatY22DRQgopwOSnf3c1Tp0eiYv/DWOxwj52l3xSbsamMBCcdEBhDgLMweW6qofrkLh3eTh27TEomVPO/JuWOCtvAPGxz/tuFpPnMo2dMHhEaNh0z/7b20opTonGgo6tExzhqst7Fg1awYfzkpto1J2xkB9Xz4Gy+tJ5HT5zl7BhABO8h04MD7xdkVa/DMMOcoHJTZGUU/jQaAc+mtk1Ub+nOoCKzk2Nb5lQIYXwknB4hJ9pwA54rTvKu8qF7Q/SZKQdcPIhCTsV3CoYXow11PL3D9t7m/Ps8rwhTp6vXk5028f9OTRcfCfA6SxW/0IX9obVqXUL3qdNAXq5uAez55XLUaRN282X869gzAT5lstcRYHNNx2hZzJsmBuybOW8O0pX23rD8BOc8MADmzbel+7oPHcY0WT+9JuUMjV+kruQIat8GatMThlQ/LptCbo7KUCZzTiGw4m/sW1SI9Zv7zsVZVXKnIXgMqfRysdqvytEKur5pibT6gPf+/yhGREJCftaAZa5V7QJIFiIzgsNzcshTRkDrORGoxSF9h7/gFkOE22YLDGSAr8nJviu+VKTyu1CcVIYw8sL7MnMG6izbSbeuYH7IHdKbxhiTxvRmGhIVpjCJYQcvGNboxw+DrukpzyEzaqvKy462LnEJcw==';const _IH='ebdcd20911832cda7e0fe0c4080adb0c4115165f851c001bfd083c6e1f61cc3b';let _src;

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
