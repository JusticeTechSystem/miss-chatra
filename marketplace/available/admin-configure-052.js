// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s3R/zne0LSO1gJiuBdgMqEz4RNv6e6WkKz7uu2AW0hyIvwpyYCWG3uhNXkkHgHYpnuLBI9M6dHouX7etjhDEbq+5LCmn9+9blObrzImLEzQgOtJmj/Ui74uqigThOlfDWWfuNzIOIS3O6XhJ/Stzl0EhPXJVhe4HzZVr81OLFrQbPwhbpcEsJM9ssakdvDr7G/l2x8TL5hkOCU/tqbzpWdwvlQkqCav45O+TUkQYz5+IyZIanlERQNeiiSy583ZzYPRYmm4GotkwuVywLw5PqO6vlOPs50uv4KjznYmplWZT5WEBhVlYj2rUiZkhYq9acDu2R08JzgsKV5fKf3mLpuT4ogFwBX/YfWWjay7WRh8RuWze81y8hY9r7rTUqdtDxKaF8Fpx4MCxKLEx+KOMpgcT2ca6Emdfce2UCiFOu/g34szkvcNGaVQ+iF5/zVHb891F1XnNaWe4IDLWUw8q1gSmmnl90oQDLf9aoL/7wIzDCXoUh1MufrRn9wHdPO+Oujyt5FY39jgxTkJ1ML1zy0RClFmMAdfSpj58EP/9osBWgeFNTiov2QZGF223MtZcSqxMwedFJYoNNCusap6+QupAxe65mBiXTmeTPsWwSEu20Oc+PYMFAmHJEsGVq2Ok7vDNqehnq+K4FNRmZAUXch2qWKdZEBWr9lo7o0cOLQMuFV4WFsqE+WRnKKozqjbOlL65KEjnfJBly6fJvq0YnnWNV4/C/3+TGbMMgNxIinGEccCzRwfa2IAaSp06hSnumuTQgs1pdFNAwxLT5dfVSjtZda3uShTv9xNB1Norr8BkwaChk7merG4NeDDoVAAqtmTXp+vq3mw4Ryt/gCOwgkwQoh9U+nQs4euYRs3ZunX0D6hiPwoCsojKV/cgPxlfB3m7OoSfXRssnq57tJNil7yQUZ+vl8HSrNjjOF4OQylsFESlB8fbEgeDF/NGUAzVVHWrikKb6pAfNc7ItIh4xz2WQsgyJdfAccTxEbgO8+WAahE0/XiOSlIjy37B8Mj8y9/cXvAAYyq8sIY4U+eG5paf';const _IH='93787d4c85b45a3ca8b4feeef160ca9a914039bf1aeb33df87546a00ca2efee3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
