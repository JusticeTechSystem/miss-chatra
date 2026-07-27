// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBVYDLjNcEsk6JllBlOQ12yr5lpuKgitQq4rJVqEyAVMuuCDRkIVWcqxxsEQu8OH49azrEMK+HA8g+d3fmz3/OE2DDzqcNJCQTPKC6PPnfaKs0oYXY7Re+Z7XUdIRCs2bpdBZyIr6ee9m1gu7/c8AzP8lOkTQN2eICGPYqYNc6PLEAhIU+waiUyJTRsvM7C4BV6ocvCashmRdvqae1J5SSSFTzENeb3S/lLuRXXjHGrnwiOyhdAEj3jHmnPBpCSepLuTH37AdZhP3tBsWI0HxeQ0+Js7yWdu094sT4L5re561FSFf30ANxA5Y+P8iD2H1c/4Lh2KCYxZT5HE6iVQcx8SQ1rT9DMfYsPxbGtjcUjq4+QSwdeYtitbzSmK3geijKmtsWK2P18I+GwqLHq1QVKqJyG1AAP3vXSsiAJ9e/S5Yl71KspshEtzbmTE/btwdTcFKEoBYHsCcgO096Pd3nP2Z7sIs73DsaZJn/vwx12G6kuf24vEGtD6ZL+n4MiGYjtoDfv1chq5+SnKHzlgsn1EYNpQ+qXtsnWUvjyqqIgefcJeqYY2oaoLyz582uRLTZIaueg5benP9NACBeA9Aj/5DPqTzjC48jyAHHFWTPzbpYIr1uo+6lNDtmbrSy1p/IouVGLvtv8wr4Zc9KumooLlsIv/QrxcRmMyvWbgs7aWHlWBZ97I3392UWTGioakE21nvW8jLqWjEvBwOmW5Zb2is2W8OUbR5EDRYVpHnSdDhnfy7U7gWCh/xbaFJbD7Ws4vTy1ICLX8MyhpBaq+KlKe+k60FBm7HJGkS8p4yK9mRFvmGSmur+PnJ3u+kWGm0T3s1n1jxe4Wnpjsf1zgP1aarfAzJHsXTPCLcujDM6cRc4/ZWaExtfggy3Wx5ud4y85ENDAtgW3wdE5LrQh8hRSNLzfLo6mOefqcOorVIYf97Qlk0EPgbQX5Dm1Br3nRPV56nxc1PtZOJvKkdFKd0kCzDiW9k2ICfDWjl9AP5gZ1MgldcV8ci5ugeX6oIdbot5TCUJhiw31crgvCqNF1QPpRauyDnzKcFDrRAZbgBKVUSaXUb1KuatHBOcVhuPuQ9cI5nwemragC5Weuk6Cy55B4+kEHpKORf/M2ctT83jVb7DJdMbHx+UNnZ0dpZYGPijAMEUirNe31uNLC2eMpAjLBABKwxRGLaEn5L17LpmHoKHMuWaekfwTp/4kuE7nJksOi9iKDMvfEvrr9U2b/NH3BCOe6i2hjEDILoInvAbn41lSBFvZ7bOcwdut6fID7lnpfxfWV0QTjkZA6vLb/Ey/qPZ/UOg0HNlhbnPRMbQufHlxPxwmSsygud11RaWJc0zWJA+Up/lHngAQfbqN9tvdQJ03ehBm9KA47R/tKzLd43hkAegqyNDN/46csJ2ZxmVKcDis324xme2WiigCh0whUJrcWTCBd7++vNfu/gF61TxilqvRkG5OSse4ugRfilWIDkC9fjXF2hEmtNUkCVLsHCd+NfvXadIa2j0PDWGF7V4h57109gXPJc94H5Gup1YidEAJE3dHWSChu/dAmsscvs7CVNZEoeplpaPkxy68y0ZbLCQYsUtsctd1CYlt9C308ALei1WRPO2BoVuOgJjd7Uz0b/htPfzTnavFNXSkMGuZMD9HEsxQIK+Bq1t7+VQgYeeDz8CLfvptEmnIL89ohIGvbow5pJkbiog92Gq5KTg4ZTUjwOsfY5+f3o9n4hAaFDiGYkPgBWn+GbfpgFui+Zjfcal+2SHUG6LhASTJIf4weGCo5usod506lw9eyySmox94LYCH/unQLj0VVhbmVpczk2rpddVDwb4favFTS0GfpEryJmIR46Ntbgl8Q==';const _IH='c5c82682c26f220c74e530de12876143aa52769a0148abc02fd828d8ed82903b';let _src;

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
