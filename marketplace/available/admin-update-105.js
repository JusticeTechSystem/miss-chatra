// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7vQ3KNWO0fBC3VNkRkncRUSjkpWdabgSWRQVpcnCBlG4kBg5BiKqpCBYrtW5Bng2pdEUmCfplqnZuRHwQk/eutxjyOh7ziykI7yeh7w1nbB7LZqtJfqIqzPLZLUKMATzcXavRgUGsed2S9tRZ+OsCDLthM3ffbKcaoYF7pfk0v9ZTsEiYlhFjHl1A14zVSmATAlV2T3js34sktZB8YlVVZn3NyMNzSwhjpX4FsHtsfaYiU1A2HOSk3NjPITarwkuF2H3KMihav1GRHEcaBKHogUnDsXKuqszXE0oVcteULhbp+DfmwSSlSod/98WWHg31VZh1C/bjPBjOXmG2J1HemOcVQXXRX2GxEevqLycDoPAOPkOcF1nlKyOepiTemvp6JXF4ftTGTTTSTVzG5/sfw1aH639hpHikBl+6IRpJhQjmK45O61v8e+6DubYwF+yZzKGmXb6U7JdaemXupvCWgjzy/Uc2uz9E9biUz1gpGkJfIkNxh2JR1LvOwQT8xhh37G97BpsltB5Tqt1gX87ffPT6JP6EzWcia3t5FNL9HB/JspwdVviwdog0aq/jx8/JEQ1qIyAS2JxgHdwrOfktqxIczfEC6rk/CdmxeK5rRrbiDKwoOHQPjQGSvFIe4EBBrCgpo+4kEiyLpK9ywPF7WMUzlLXjGwqnb5SvnjG6Wf8/uIbM5d2FmgTvtcNdyljMmL4KP+80+8uRQsNIS4yVMkcypn4k/LLif04eZUTMPQJJUIHZxvv5DlEaeCZSnr3M4TpGFSRbI8eHdny4+lHqDRBuJYTOTCCtL+3yUE2/aplw3qklisUvb3zoSp8uQxRad7flIL7kLQK4pw1EPZVKASSvwc4tAy0liQ/R0A1jqu7vBoEPETT8l1uOwsiPPYMHmDRIJRHLG2W9/+wuV2Xw7SMCgwhBeu4xqqSRO0TO+EsuLdp1cWDik2fo4znCjIIrmEPs2o/YMT//1YBHXQGk/4aUeAsPcWOY6h4bfzLruRM/Or24wl9Jn3zIc1fR44zMw==';const _IH='98da43f4184b05a02ef358d23755587b1c0664385d772f800481d68b06207852';let _src;

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
