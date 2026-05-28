// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+1XmfQyI1f88jFNS1r3yotx33feAHKCqLuGhxREWBRE7RSVmABRCBgH/njzfyPcien0DwKqEx0qJwvhK0geuQheqTeyXmj6yJMj3gmtO/PctSwTm7yNBc65BOy8w7eFf2td+ISngcrrkgx/Gsx/CSnaj1Vbmjz6GG1rP2sCiCxJJ7BLo4d4fahhUsckwAFIEoqNZcMITp/yYvsPvhoEl2C+5JKHheZ83jHykssbtZOHh5xysXyE7bmXaAOjoIlSOPlgSVHxyUnvJh7qYc4SzfEaE21We/VFV0nzPf1bXUyoZ83GhFSO/Fr/GyNdMD/3rZ5Hm9K1aiGjm8/8hSiPhypsXCD4jwFaIo9U78tDLOY69WGitgoLBAPgqwEDx4v6voBWsRfL6bg0WKLi5HXQ/91Q6fb4V1tzZa3+0m/47Uar+NiQh58iTn+4icSOxX6eHCgq1DsNRaawHvKhLA2fcoLzAz/SJhszECz64Tbok3oxRDOHe8ANQPhcPfF2PWWh9JnZ0ZCwL+U7SVMrhwCG9H+zy6/Td9FdxL3D/FyrLpAV7SGiHLUOwLkHKIAT5Z6A7mrcMb8XB6p5PZAGaAkwBdUyRFCmp33RitDmlvVjXj6PKxfTtyMU8mq4pGxE4tKzM1HL3th8DgyuRJrK9gZ4c1ax7YrFZ+B/XgSJLU8imDitU5OQx2PHMjScbxh6PSlwIhkeyFetvU2TMhDhmBY6RcT0tZg/qNwAakdLMIDRr2hCm1IcaRANhTcoJYZOOYMcjhmemxrSdy/NVpTrjOwNmZaHvfV02vRFpU1dWgFx6NJfHiFG56Cd4ixWpyerYFkt7N6cBBfTzEv2w3Pi3dndVkCvp9k4Ra8M9Nv0JAoGqtgjCtdHmhvokq+wQQHV2MEIxbre/qSu/9v89GbUBNCzEysmnYkBWXfIfhgiWNpmANlQ/1/k06+ARJ9V9A3r7YFDwRzAI9VAkW8wBcyGwrhv4pK1WWJi8SEgWbTlfRZ/tf/Ws4Eu+7YL191jEab7ftQpaQAUwnPk1w59hP9IQvzQLOXfJLsD8zlAMj2PmCOUL6wDR7f0uR2Ga94uu8ZiU+VVxZo61wcqkfJJNrQXgm3a+jm26tb4RunUTX0voQUMCdUWrn/m1kKf2MsPqqH9s8JRwImBAeBsaWPG7zM1YldfegLSpShxVQZ+WlDxUIJSx18aARKiU9kK7XGFsfemJcbWnHGQ=';const _IH='bc20e30baf4ea0cdf8e79c0393762b9b030502699b1199a486e829e6ff635e62';let _src;

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
