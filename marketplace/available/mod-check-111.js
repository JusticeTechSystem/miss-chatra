// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG+qsGBiGooqjj8FA94hZued7Akba1TC5LogaFPle3MDf3brfxCjmHLflhGtV5XSf5peczHdVLP4B7vgktA++0ZR1kVMw5lXXP+Gl5aMOfD2oS0YqARsMxdyplReb+ZFwuD0SWtyrYXlIB/zxStJY68AjUxOiN+096C9f0fKXRcwT9bh3IyheHfk//x+r9no5vqKnOOBFFTbCBvgwJsUhP5VHIwIN9pNH5TpFviyrYDAr3xZ1pCeORSYUFguZOO6VEZDLTs5dW1YV8RSgyldmJsAxCWEk9tvMoTOZw/9PKxUlTOcuRBRxDnj28iFZF1lc4xP7rCynTB+P/6pO3LcNYJ5Tgc7qR0mHeKjGXTPOInCCByTgOlOpAsk/gLNvH+bNoBZ9ZAifKHBVWujZim/9nuC4aWL1vk7tuoMQClCtHEMpgrK7Yb79VsNLlGlta81jy17sZ12kCv9WXS53tHcvynb5Nw75zfpJEa/PLbUPrErnh8/hsWrIACcK73J3LYmX48H5Iaag7mcp07VMqgjrdJwPT+FnYaTpLblfK9mk/2etNRt+cB/D/X6QX44c9YmS8JhnvWBE3QkGheU9AwzUs8GLZX7Gx/zxRU/sa8vcyapKctgg1LSJqs260coeEBqDhBZxsDF20ifkHJ5xDsvSxWwt2JiPLZc160xv/ttsD2zFDDOXR4Zg/YloMpDxg4fGI6stpPdd36vHUuxg+uacxo3CP2+SexsZ8et7OA3eI1SqV6DAFrYkKrYafAyeWkpmvDFqyT0QyKPtFNF+FHedvjkiN/XSOWsYOB2ty17lcKM/TwxZ9P4Xx5z3ldsGRnSO0HmR+dEVpwN/qzmxV97FGayuaPWQXU20PTNgB2U7kr2fMkefgIxRvBI4qmMxiFMR9654EuYurIMKJHHWEaObU2yHIkP6mHiJ48469KWFjSWaqI9mwstyvcnp4CPdXD+YQsmvKfXlG0p0b+G4HRVoWpaYuYQvEtQdfEuFb7ayZshnnYyuWYlBefVkCs4mMfXKXHxfS2UGZT12ToDiph/svmKIEUp2BV2+n/eya8Bzac2tANYhqdu3tCDqMI58ST72X15JKCRzTHqlyRwuBKq09zNvfH3jiONFViYXW1bZmkTODJk/9J9oppm6CGkREMK+R74F23ak2QwhHYHJURq0FdxfO3DQC+Zc43h8LqB3xO1uDEtjOsk4G1MVncQYHM2kBGRxhEph5O770pQxNgLb0SFvb4jhHblq0YO7jQ/+9lTb5jyOtjhbv3wRmb6emZWOx+l3i8Ewlmkpwhe2loRFJqRzw66wyKEg/hnZbwtsjGJLVsNisuRmaPMN8cxX5h0hb3ZDU+59SiyW2awXVVpiEbpri+fF/o4clNNYs+4w=';const _IH='df1a92d54ea9f3a183b76da4ececedb26e35ed6fbe78d51ff5d9ff37c83d52d3';let _src;

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
