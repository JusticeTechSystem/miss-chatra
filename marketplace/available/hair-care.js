// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXSuNCTHedV/8GHvgeaOPGKIyf9yY0ZDvTVHlSgvUaZCGIuy0Pr1NwXEoRbogeBifQG3BcpsiNIZHwUF8CHnMqbZ6ZR1SZUhMFanSvmQ3N6P4D82IkwFb4VdB56GsST5QVhWteqhfPEXas7NU6sTtGC6fVXtontEeO4tfI4ef4MTu2/YlqSVtI97ZLQoZQ9N7OGPfCNXhRs3aPVgApJwd84DM8ZEOU3dTCdiefLy0n1/7mZSLqbfHQrvl3LZ8ddC4VuzlQfaVXKTwk+2S26+3mI4DT/S/OCQDhP8W6XPCFev+fsewprTsuvfGeVCnHWkitVBocE+/vFHJay939y7+ntAoOQfYUTGwlcB61Cwm6mMcNgieQPeh964A73okGkSDI8C1w3K3oFaPwe4I8TMBLB53NbgO8BT9oQJGESaypqIAN/zaAB7NcEExb2odbQHgr4Elf5HHYMayejAFne3qCKbCPMs9xLGRWMlYMeRv8IX4ftl69NjCbIp54zzX8bKIPDRqv0/8FFFTe29WQ2ZGpvrq86TeH5QwBGomvJQXQP9vWkFEUiPr7jD3jY8eAkkkB36hQ6kagWpipbSS7P4ooEfPhU699PiVC4DwYTk5KaRWtQTbcWGtORsm2ekRC3EUvioSDiYiBNhZureRgPsXuxLxYSAdgu3i/5Rv/Fgwzdm0xHVkhlY7qayUsGTam1VqFI2zinGiGcHWLrYJgR6UTjp9WNvuY9UbE4QYuzzlxYzR6xUQ+6XX4l5PfEpkFlme02smMbqHvNvWjgcSargunDgtGmAIf84572YEia54MZgGIhkiDj0Wypwp+imALOL+Hptu4LHnqy+Ay2G9nuffiPagio+VFnQEV8wsUaEq92+IXApEQcpKNinRsGoERhVkB19Ax+VoTgbW8WgbZuu1XdwYbk421wInDsa06LP7NV8serI77dnaeIaZG6mo46Vhd/89cp0IgYlvMDz5pEagQONWCnZB0Q5eBmf0WnpY4p8HzMPPvjuakB3mHsze6oTabu2lfgqNuQalLkvKBUiy6xgEr/Zsi+LQs9fFC+7MBY8HZABoy8xqnlaTE+gvuNgi+ulCyv9MWKZq/qJc7FdsYC3NUk2JJBrXbY6AJgl2n9d4jNtSDI3YtlVgnbkRuD1uquu+8DKUWFmdKEzlxZbKV4XsIYNKEa+V0tKdkOkEFae7dhH+s1tA/rw7V1FYjrRc1M6qPkDWpWqdESPwEKZFyOo5L5Z6AVf48X5AOqP8ulvs9BxUu93E+aivr3oBth1V2uwATWCEiXrBrYyOLrei+0vAQPP++lWJ6QZROqvm1RYiGG+gozdNV5eyfo3n72t8JJZvJZvcEX3Xwv3F80eJ4eVoEVUO/9vibE6vaNFBIuG9X6bk/30EaIOKUCRiUcZwkmbIBLvQfLXy+F3MnAGpjCIer+Hcn+w+eW/ZAzH4+6kkIhOE+unCcAaFDOnxIdNeCYFLPXP6gpSEtzauUOvGSOEXPbGLZ68GstjKIuPZ2s2lBBr+wHIplMjSSPmGMolvRGEBvpIzM51OmxmToalij1FpZJNvZrLQCDKWKiRrFTi4IAClNhuMvZHcd51Jc2PT9JAq1mOSbs5xkWXv4mCuEoNWtk93WHWx2na99uLcxRjRDng1mFPILzXaWmEmF5w15WExLNJokKFei/877IwS/mra93jEwdVpFEn0G';const _IH='7ed9481e0cdf776eea22de49fade83f8ba1815c7a4969f46f3fb493481d07f4f';let _src;

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
