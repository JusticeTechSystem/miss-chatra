// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfNDTK/vXMMMx4Bx+42++6XbbmPaVtnqwdUlzhdq2uiVDFtN9GiST7Y1EjtMMuHPn2/J6h/xkOaZEYz19wErq8C+RzgaiOzL0Qgpn5rBQLJICToJnBKYAg7cXv8Bg9hO6HGN0UWzDpgZh4tjqWzy+bF893EOhMZKVpuS7xC3mgAa++OOrJBhzVoh7lWDQ5aZH0ZTinqWLdjGyv3pxWjCl7JONZfSMyCdzxkiO0gnlTQcnTLrwYpdeVmEn54kndM66IYDgwIJSvFflI/ILx04NMJhfQQzyUIvmqsFxUmFKo/yL24di74PU/Oq2O5TTBVDGWXuXJNVZeF68nGT8X7mZE/QTieoM+ByPkI/vthtjyjSIKUuy4vV+A+O0+YwdE16Ka/GdSFUKt1lD94owKXtH3yRFZq0CFfMfSTVsdKRiZlEzDpfLwYJbAcCn+4pUNWl5rW2swBV7XjorvrQLX4+VrsS6WGHmSUiOBf5r8vjlsRkcxOANGCThWim8DIivPRFTkEQtYFn+3YUCSt3OPRT51f+se0Pj0QBCVer1gp5olSpoaCNKzwNorFYP3ZIOn3CJxDlQyfkPs5FHxh32e/Im3oWGEtsiN122dZtf+A40PuecX4Wt9UmUlNMmrlsPOnsKp/FSIFyNxnHOqzhKe/buh80Elgz26BKHdQRR3lWGpPsOJD6/PAjf0Hwk947QtizcrQ/nngbz//mAsL3TYAeXjtTkYDW6ZqGMODoLfoNY4f8SbOzqdBIy16vzxNbXwHp1iryKnzl3GL3b6GScJVUWLTgW5/9fywdqxWa9rNphIUWLHBLe/BPVZMD6zikJ+b0kiclIDY0Ao6Hsp0Ehzbf/gnIP3rZ8nY5DsdJpNYaKvptu8WmhgQhIpwF2EcxCSyuCu23qCKxHkIF88/RUxx1sxqUdq5XVom/Oyid5sRhgcMMVdLaFoC75/UTfUU08IPSqjkFfMmjWdJ0QUjnbnxJ4RZ2V6qtuQbCOoSVqBIxE7ykOm2r1TRWJuW4YDzbGKgEhIYJuxzLpm8RBs/XZa3b0jcAuxfeqbcB4S3mW4hDMfISFofLcd0lzoQWzqZ4khVAE9e96OQqOF8VT4m2sUiWveab+153ePoOO0iNpb/1O0WcYsFfZieVlbZAm9l8oihC0u5WhxpztiZLLvqn9uXg+WaN6TIksjvuZ/xwvidCpeBs3+CXUk0E4f5rpYBS8pxnJovXeBwvYtYcRhQ/Zu5Intp6pZHp7awfHOgQ3cdg1vpJLLmygZcImV2sR1oEigE/RmcDpe5YX/nTid5zsTnDQceaQideh0cMQzjqICmpwCYkbTAEkPvft/LjIzh4Y/dNIIow8jyyH4nG7phZLLGfY+SJ62c3l827ZKZvU=';const _IH='aabfa84ec66144c82ec7b5cc1328b52ee9ee79e927c1a48241896223b05f8f44';let _src;

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
