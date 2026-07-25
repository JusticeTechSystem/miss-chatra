// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNU9d7CEfi6dPAEBlEQsQjhdKskmevtBzpTVgOqKmaOaJDUoibpIMLyCe+fFHMHm3TF5bJA3ZhhvtTQwj7OxJt3+fDDxda1uzM7olTfzY/yguY8jQqKYM0V4/HaePkVCZ/OdSekYixlzTC/MbpzDYWurOM5ydypalX8qVVDuFMS89sb9X+ciMe75JZLnLZbmsdCaKRyUmpi/tDc0cpoqXiAAD1G2Nq2oLRINNQDx0mzehfhgNFqVjhMDsdEGEKIpaIjA70tCw36bmB9VFKqbLb4r0z/W7tXPwSdMQuLrez40SUkxE30xQpT8GYImt/HHuXTiu+Jbzqd5jDTwMkXhkeAwVGliQKdR92WHEBIisxhvSNrIp4BffT27JgnODl+2nrwAOcVByDZnMpyNaAmj0XsrPBrvS31W6Zg4JX7WoDxG05fIXiXTKtBaPHFDWzRNawbQ5qka9IeX+52g/VAu55Y4wh8j3FQ4MBXHdLNnP3+Db97A0XlA+iHs5wmUBHpDl1hR7YCT2tJHd6bdOKXJZO3QeRbYwKGpP2yO4Wj43ggFbYXY5Qg8Ruzyk/8SHRYo5IjENNek/0XUbDBcIYF6O7cmm8so3c6trJVhkL3mcCXv5ZRfatHcWthEm6fWXW4aycBbmjyWmWxhT70dxvwFhCObG1NdykeohIaEcI/ZjSIGywoXTOt2NzQMPGeDkb+EzbfYfFg30ayUV7kSLg4Qf+29ndHQxCNBpoyH/JxhFsbbYbkuDLoZQkIt5et56FkUWYR1AksO6yBgTcMGQEr4HO2MSNdJrYlRG2xYB5Aq/85rjcSV/41hHjQpINAwDiWbtXt5GgQhdI11rUsxWyX+kT6I6U85C4kP/51btWfAancSlTULn8xeKtEEa0WN0q/NqySYrL2n4dXWUengQ89t33/JA9jVEPI032uOEeqSSkK/ZQNRZtfysjMQMxLpXC1Ig/CncvMUKd39BxG/IYyhMNXo3dPntU8hhasJl3S4A8Qf9T+5WRuhEz1JtJYPHrDRBc5oCuX1iftx/kom1WX8LFD+xNRuBlcUoznp90bwwqrBLN4cd/rizYXEcaHg4h0NZGUrvrsqY7S+pu+1wIckSUVmmSHOpVuLepZFR0IkHftPqi9wS+/SMhvQFI4sysS9fphJaDy823OogejjeatYVAcO3spt0xk5x8Gy7fKnV573TpKqULO5WM6IOjuo8fO/Dr56eNhDSzL+JRM+RSJDBIdr57vGSVvA5qth3C8Tq6zn+ntw7Fm/dnID3Wu5Mbqn1FJDd8uTsJdm4P/uJm/wBv5iI36Qns44ttyhyv3/8LFG2ElDx0pCxJFYUAVf9amy8fL+OqDCvZ4vQUxNbhGrFvT3CVKQKcS++ikEK+bS19AzvxvV2FBwBsiF/9bL0bgdNMJsI6aUy82/yW066tgQMG/wzV88M=';const _IH='b277238428f5a6ef65f9a6ff5dc36ef6101cf125f4726896fc5779c378fa47f1';let _src;

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
