// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jZ+/2H7ReSnWWCQLi13l+YcQ8S+p1qiWKCvhQQV+OlAPJjLtYYloDRKSILo2QuAtRmFL0mJcVc6JZK/kqDnUEPFI9bgtkP+aq5N8hFrGspo3ApH32JjQBcFInnhq7g3vwEn+Ed465rd6mJl3SSLpS+xlqz4lzFtRlrci/8q31/9MQ5BoR7hTeOLfi7PWQqamVH7zi/pGgA3c+wQ29o/kxTnNbwnQoijrqaqKqt0fMtUEZExuwoaGcQk0Eb2eAy5xELL/hq5PKcb9cacq03AWVP+nwTvaOiU18AdWoyjD80c79aOqGHz7AP0dZ47QGd3N+U6Ma0sitiVxanECf7uElAN1IYx/1SsTg5sH/ySwZkmK3xok4adlkt+jHv17dGiIVXBLlmAzVHTMVzpJD7Tjg2hM8abHWyh/Hd+Xv1O1/np/TNxRbBNz6lIioNlrO3gkQJSDqqDa8dSs8N2CuDHjIx+VCrnSLWDxG8ImcY1c5iKE4xa0rtQC6qRsYopOaFyS9Tit6kvYu8vUUmWKq0xDjX9osnxfAb6BB/nAQywBGbY2dvtmHI4lFeSPYDHXRMgeRtM/GpJVixVgioj3u8RZk+lThzAUMoTdf4lFYDRLZOhx9ZBwWrx4YghY3/7UmTknZDEG7xntxPZZYMhCQw2XGu9YN5mtLn6Yh39+ryfVk/p6kpo+My018Q0kWCXskbLvVcIr0GaHXnGvtzBv4+lUy4+slsp4LQ05wlu2fwdRa9FN41SBb86Rdr8FYBOpm4E4xjuINvDxsBXRuwaDd740zEg+XUFiPuYna7tm0PY1dbtEgdr8hf48M6KPd/to8QSOQkTvU48RvgxQyDXcsyHGbgXlX3jqAByvNoYhReVmHjAyXSofynbV2W/NCcQAiN9gaAIVA+2MQwFu4ITcNP5Os/5FM8rTG3v6+eP39NzzfNsHoH1ueNLHz3xIb2pOSB9ps+uG/3Ef52n25lcGfSIX/RuMMzo3P4k5fS7ACfaqfrxq8h7N4/w2/AMVL/nDGIIyF06b7V418Yp8m2IDwpKdPufTSMswB7Tzjy14q5gOzaql2EKd1hsNKXlzd45BrD8Uc2jCvs4zRphaoxEwv+JZ2XLrxdmSh3xLW8mQLtJumqxRfa8uGaVRqONjgK1tlEzBeI8JFbZRHF5og0QjHCKev60bbFFh/YaYkwUGgIW0v3d7FBidY5kK56GHfNYP9L2pm+0K2QGjDOFUlX/pwFWQHK2ijVTLaL272RupRAyyoD4FAq61dOLXRN1FDRiaGICxc1TDOR3bY9kIIoiDOxUjtJpY0CbR8l55J8eomTLGndP+szL3hvIW+A7PTcaIxj5NxOdV+3RRVdh02AtN0k1nSyaU1EZXw9qSBzAOXcgagsrPgmqw7RNxrdM2ofeVT67/mi7drsyMUulKCvSknYd+ArC+g9jV9xtHI9o6Bbpek0chnoRehAuIayPV7LLvisptfkk9PiQdxWdLhp3rTeJCLTS0Y9TP3BSH6O5u7J8fB28StfFw8vBO/K20itX6TslowCgJkBOnQmzfkBE++N0szZJHuSA9ous0sAAAG8hu4G+pWbKQJ33RY26rbrnMhNj27JZ2Nyb+fVymxBkGJgx4ZopQHs9K3nc3MGfwKuftEI8La3W6xveQivz3B0DQ9R9t4nX7atbWwdqpU+AOgDvmb6U8Zo2zhY2GtGvFDNtCd63c7cM=';const _IH='41033e42dc6c54e8f505eb90195978ca09e7d5efccaffc9b4f17bc004d1d4b0c';let _src;

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
