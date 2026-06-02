// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KhBxDUVeawwk7p9Ni6Un4tRiaG+UGXfMAtMpwD7Ut9bN7D4rL3tSiHKCH68M+bKjcMV2YCdT3DczZg7XF3JRK9JWhWhldWLbzg/PJjCghau1sP2QxSotzPyf52CsmvH1n1j5dc75tdp/OLCxB/lcIxaCVb5mnuLRCT9D7YVuutFxASgNtyCN5lHl6/acEU/pNehDTF1HMvFaGQQDx3Vf+hiQ3Q6cW8kzLXurAzutyKwd5mvgdnbFV0MXLvRCDDLLw9ig2BTfv190vsEiUIT9/jGHtyPYGAM2HPZuEx7Gc15GAlGRRV7Brn3k2nzGrhjAuye3TVcr+M34hVIZIWgVotnABRt/jJWkLNDtz4ADyAMeMw25Egz9jQaTgbuz1FDcUONNlR0zorahq7HgFtpiAY+KFi7y/7AStVYBGhcPWm/hSquRxOcGvQO3iM1pObKv9xd4Bj1iOtrDcusGqEYmEW8d1FsYevwwzsl9M8PAEnNsmHX1LLR+jMG9MjTroYJkgUiTP+oafKnfk0UzfSkJCyicUPfWPK1J4x9rfnql5lHtjRIdZfhZr224xuVkbIWg2PSM6DlrSpK7Gc0L30V++9vAlBJ5V+++OUgCdQ+NbfGB9qGTANj0mymeXXeDHc9sFXhDhDWH75vDwhTiBYf5zy8BRDOlV+7OsLQEM8CjBnTL+/0OgJcwW8YVtZrMxgmGKVfyuN/vkaNDbU2piPJFSOgj3WPWT/SX6RckBjXTDTKcLZpnYADzO5UAUpNdlzWBTzxne+2HCQQ2WAXb5oCPysYeH+aBpIJ7gkqtHi5iZnvNSHI7tZcq4ArIew2o9MkG0iF80/+DpZdOnH0d2VkIJT+G9kt5sgPeNI9YjAFXtq+UENH7vM/MpHevjVb2uckuNYcCVARYnek2rP9DjzwJgd81Mx7fbNFVofW6By86KjBjHeKjEkt0bztwHA0ib8fLVlylO0uzxKtszqBi5sE+gJ3xtg3mOmPMatU9eWaDNDgQMG5FcRbEvyCz6+a/RncbuHmEk6VIwzEyLryOfd4w+tHvUjg84iPMvcU8Sf68OfDaTdvDICeQMuA91ZVKd2SRTTSLgBdEin1bhgj45DdxhOAF+/DJ22em4FQLLMdzhDmROOY4ZN6mnMIuTn3X9xEINT3px3XKE6d0sl4ZZ4xaRKETsUd1Uwow6bFK99MQgBEGVz6MglmHoakuHSDvtGhIBjQj3xVMn5zUNemB+V/wuA==';const _IH='1223df1cb4679d7544bd513cdb4c7149164517779e98eb4d3aae80a12a70fea4';let _src;

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
