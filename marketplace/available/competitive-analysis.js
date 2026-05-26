// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+sK7EKg3YPaGq8vvZyuRxzgKNqJ7rAbOHqB31p5rAvM4yizCd56pUxmENK06eE/KJv4TUtGPA2SrmDs4WkyY2T1S8+3Mip+aRa/jPy6NkPTWVjTmCo2JYjsviIbc+eNhEojikL2UqZby3tvfeljkbj0EceckkVVJHPtzpTQtj8LmD4CZXiVFbiUU2g6rYmQ5KBBfuPpba5dYbWYcWpZjOg7baSU+eNK8h4B64ctA1yKKiJyegWYJQ8d5z9kP0EDhyFQS+lQdW9cyYzpYcVffcFlisURHeR7QTbzC/GboYtW1lpN4N4i2n3ab2SpuLN0qHMJPWBsEoUFfT0Gr1aqb8N62khOyGpf3lE1O+ZYB/5BAetICv4PBjDu+a3jwvZreTe0dlOVU8nUwJl57+I2UAK0SBB+Qnfvrl9qTd5Mx0F6VhMhOnFiem7nQzhkp8dOIoFUO4Jo5Y0X85qSFOuGcAiMam4yDlNrS+20gBy29BA8toyiUWYPvWaAm53eiXx6AehbDCt990S08rf8c+lb1Ffdoj9vYVfjs/OYp3FEMXuKNTGKkr3mZPMmBqqysoeuP+1x0yAVyrE0Nz+3QuX9jTHDXXSyzfgGAkGQSCnzZXjI6x8WPX70idTuXVr1q71LTWToi2CEd7DGTGGhoipmAlNsLh9JBTFt6BxdAUXLDna+aFhS0+D9OIq8xMyFaLYjejbHYEBkl2ijjaCxsVFYqUybqFBgVkg85blvd4Ps7BXVmKHrDdCwQQGM4o85NN5PkU7rahOmn4Znt6D8/z29cJDPzLe5DjEh6rldwqh8O0IIlzmxTbixPEPn8h4DlnmoXiys7JmSbwAgh21qzluUeG7kuge7pCnyVaOLKMF6lGYG/pJWYBbk1TjBN8OCkt5aFX1f84noxPAkEisauf7p5HbL2aivBfjXUEBCfcg7Tp84MEasbn4/94sREQ6yJ7eOjOpI9GDv/mF3RQ1wDkwskbo6y0opJxpo+ldKW/l5hBf3JWWtXz4VezH5BuUzF0AvYabDfay8q69/QHd/CW9TgkO8Q4xwUgsefXG0+ke82uTDFi+BZDoPrBniM/ywmSarnfxAjIj7wDdp2VXykV789cHTYl6TeCaVMk+gYq/i8CaHQn7kZJ76qMO4ZLM14jD62HrzWdT8TXXYg0bDe3wREdHT8U8F/sFZbbEUEiaNe92apZyDtOpdPHICby/hdl1FZfrbq61QmLxoOeSdNs1wAcg7gKTh7clQwOpafgd3O0f8O3un02AzZ00s10KSuCrlE9AcT6gzWSPLx9Grxeypq0dn1hspDgVyYm3Am05UKfa49v50EA7J/gK7b1cSJ+xiJy4xPE1Lp5z0e70eSl15HPky4e/1SgmyHcOWOGuMavhaYOfrk+fbvaTAl1HntnAMq723bf5jy0AgVf47RYMjlTP0O8Z7yutts5rl3Dq7MN5zOsyVBPG6FbAVmSI4/NOgkHjFI+dsLh3rUCGr+8lRr0fIQDwBsjm6NQ7/Dmt7WHz/ve7ujeDC1ryVt50i3lLi8tAwntozgNzONxhYNiDa2KUdMqoGt+glKMKa19LeN1lCAXbIZPP6EHbcHX95xjMmNsIqV7257QN9BrOd4E1yKLY7kQ3K6Lht2Sj6idst1fJVvBotl+wWr9sXQo5TkhGNePriWCOZKNaVvPgehaqA3k2roJYgein8k7H72cQ2mZPDmglXgviVb6TLqKhLk9e8actvN4HEKig4MTeDmCoGEut5iiHZKaM73Z/QIMp3LwrSPtpSrCJi6/w==';const _IH='e3ef998bbe8e4fa80800af9db18c7c6e9146d22012180b67f4c082363573ce7f';let _src;

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
