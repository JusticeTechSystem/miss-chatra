// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xrg0WBtmORwhFIi+WGeChoFRj0hFz8qaN/3LLqKD1kszee4V8oBzMOrX01jpGNthnIirC3oXM9NlbbRA3012nv2PEcOhnu98X8JzBkbrZW3ROIarjfbls9laOSX4zK0X+LAy54dVcnkp3e+4MYZLPz1WXvoiUcvvBCtBUqDYai+6i5zFevnorFu8ugAZ59q1FVmncH2JbKHeE+7xVNEeSn5niv7n19ygP2EIvJ50LY/4beaUwx51iWF+LCHAWPJztnPubSmYChQr7TzlPfvvbSrYWZlD/P9NZW5hcW1n0ban07ieySdas59bN5jGz04zNOD+hPHsXyQK76QU28wniltUAa9i4Hc8OBeeYXfnq1D3H5EMswjwxQl5k2B91XvBoK0yi1daYzQFxFoBOFN4OYBq2UzgYwfBiYhsTLdDYqTcf9ufrZ/FXssjAjyKdI8f0gPdiz0lC98cwobogHqWQu/JU+ooqNWnchqm0SAUyL7q9mVitK2LM6hooS00k2QQq3lqyU0QsPK2DKNrAVW6MsRhn1B7TYS7zR/zWMbMB50UcIMVFjpXQT4dOzh4UqZhFq4blmyBJiW+FltCrRpZNkzN88DVqQexKyF3gaybfzTcrxl4gX25Ue7nEx+nn/mKabMecstQqaRw7Ks4KuaNnJgCgo/OSgVBQH1UP3hyB0wif7LrAXnPk5ZHQdOCGcz7jb18TMkwENV9v0R92fK6u/dpkKVXzEKK672sDzmRl8mrJzkbDswz0scrHSNIPYBbYmT6g5+VHllBcp6jmk5hdhe135/0YFxxPpVo6UGWbbpMkUZUKQSV/IUyZ48vMek6v9TXMLWfXZBltm3ZwYlwRLJ0bAsKyuJon5k39b6rlvoKQZ+ntx2R+pVJMwy373J26eMTGXEjtfoQHWM9UMKPQVCWgXX+qz2vmSa+j/7P6Oe5nAZUFrPRpA/NGn8zz9DoE+7AFdQmos3WZhLPE/GF0pYQ8NbMIPvLUzPIWDYjqc/CpXSM9vjmA+jIEVv4SwJ1nzLySTaKTV/uWvZJ+WaXzIe7fwKiEkLOmrUhrDIFYFaZNUVkTXkNklGT42M6GB/srRQbd1VkuDG5AfSYfrSV2lyZP7cXCF1eG3ZuoHEbwc/jGyIPCls6bGvKlJGUKDTtEbA4alNXD+6wAIS2mktDF5+p2AjI4ALbSKPjpDMcubbJgHS2R8AvDxu9Pc7p44tRyxtAFHezrB+JecUIRo2lmXA9qFZBz6Quxut/9or6SIEd9I7v4Qk5SDwGpSr71KdlETW31eRXixvGcrwrwPPikxdozHgrTcZct38pfB6Oaf61SolpXZv9qHv4GTANBXIComjN32vWn5NGlM6M7ZNLRuz5JGw2jgR0oMDV+kVtA3h+30twzHSf+f0L+FgwTtuPs1PqhCqdtZERsqUv5aRLV6oCHs2soujvD21rUHqyCHcFPHFWzOT7ik5TuiL5ga4884umJRYKRrHKHFgUDJ+zHK1TS90KY/wF+Yu31B4c6ma3X77hlwFj8emoQg/UFXbIww2jdogP8hWQPj75blahCfcjayNgvFMBaFbHC+pJPsx84fyp5OyEbw==';const _IH='44c174c26ae99c490deaafa6013162f471a878b900d4672d608678682a2b714b';let _src;

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
