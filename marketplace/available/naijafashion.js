// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHwr2ilOO/2EdO77Jqit4bMOrAkmCxQF+jEmvkjyMJzPFXpw/eDpi5LXnNltySgJkMvDuJGy/lgplg72/KaEdooBtgjC06i0N6fMxDtZLhToA2RyhxaE3357bOoGqcAp1QJEP9CX8edlEYGcWd1FTIc+unjXe6KlqnonJFB+24YVtmWSOrymt7k4YEIz8B8IQIEE5izECiKMJrQ3YGhtxrDc2o0egc5mk5kmEROSyhrj5dXbJSnSc0deAvpXFVU86MVCOL5sMjYUqf9o2lGNMKvdwNG+YMc6pbT3aqrbywvmhfo/M2AdYTCoeajqC249MZRtLoFBgbSDeGsvvWvchsSjexFEaLszv+WQFCT/88Hl+m4imXPFxUIhT/oL2bAXJLgShfeUBdOijJDkYfPoH8szd4hspdEMlCd/GqdMhGJX2rAjCg4zVVkB+MC4IItGXASYsgPXnIK3LwrU7UAkL//pO/Pbb3DqOl21iKfk+HL6qJtXcRzX+t+u2BEZ3eB5eahSv29HnTHM6OOqlCyphjbtxjzjN/PAkuWWZEldburKsRhXfntVM+3xfO8Gz3C+8sfB9yM+vxohL4tO8yyZtAbuUa/Hpqy6zctq0YpzNUo/QX/qCoKxXIi2CkTPQgeXCRqIHX/gBzaqAssS2C2FZ/D3/37NpO0szCE3M1gXP7brQX9tLFsjP7UdNpS/FfyjxVvVbxvg7AAJkuxKKZsoj0c3LRk1becc6BKYlca9QrGAoCYWWixOzqNIgLHGpFVzWhEGz2q1seBupSa1N1lloXMb0oR6f6ZHLVtMXlmN5Xaf3ufI/a8SUsIzQ00/GYDeX+l7seGrwHxfmrwycRhG2wyaYUE+vIK7KWbPsXt/1PgamcfTcxFtk39TkQ6jLRJcZ8m3nHPoJuR6IXiZOZfg08hcZciV+PF3c21FrBOH/E8sKTXU+5R+9jBeAEhFsH7CLYDqL7tKmZf4d20YJPCrfwDGy3wG4wCP0+Zz6uXmLMVYP9P/nIgTrqknyUftCb51ItMU9G5g/1eP17Bbgp/7BfXcHkQK02uSve2/x4DvY7IkXVrpBXx0K5pv+c05rxTMiBuPPVkyN2FZN8S9vEQWln7znmCIoKJOKoEPpCA/fw9TsiijFFYaUwXhwlho6ichk6ozCKhRa0AmuGI024k5h+SeWDCEC0ybODpbPofV3MZl7IfiIbT4yZu2lF3jbj2RYPDuxr/T7uJAaJB8Mg==';const _IH='ed57ab920177442462a2e6f1a13d7c61b8b37371642db4fd8d2361003e70fc2c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
