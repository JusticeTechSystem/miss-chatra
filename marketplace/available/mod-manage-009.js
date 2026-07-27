// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIq42eBj+5ZDSJxEV/qbOjHMjAjNgdH+IJVKvwqIZKX1aMQfy+79UhiXSF/rxcdQXMykC8Y/M0qx5Z+fr98P8aJa+oAFtVV3YDyGknXvyWFeMAMznAynLT1lS8bJ2erWPyE+lnxvKeMZLu+Gehg6XxhYGH9zQvVf2Ot9XQT2Xouc5ySfRq2tGakJOm14xp6ZcEmi6H5hf+fTy/oVnrlwJNtsGsQQmuixL+Wl9UtZRgBx0yw2RHlzTZlgVAN47CMhUNtKQB8cM3TqLdETKkbPKbm1hZieVdp2uV4XBjXIX4GNSG7MDk34fep9ZxYNZANvdTVc3p3Or+r6PN95TeQBIPNWvqJLf7DiEfZn3hClJHQEbQBXcHznVTR16mTo2ZWwuvam+APyIH7YedHfl2zTvqIUGD62h2uTmEJTZyO7/IOYjyv8lQ2rIAH6Ie6ER01bCoGOT+HqfuxTd7ONg5AbnCIMA+/nIJJVTthsVJgPBK5ACKKmgPqOmCmKOnIoIx609mrXeHKaCTdbgy0WE6H/ZCkiCeGz2bhNL5bauupP3sItWwWJlkXCxI7Fr7Il3md4f45+2ylj3+mauWfsqPYRL2GruKG0l7Z2IwTgq12jpnc5Zpvjr7hXa++Z//o4oJCidPmy3aRHL41QzbFnUP8IOAHx54bIs13CUhCARq+XN0BOd44JiyyugbIkdab8GCeE4f+oSRtCadAq+ntHF9qMkwbqU5osPtPm6LnxKopvAIlwV2vTQe+YGWlgdp2OS41WbCiJ0Zgxu6h6tBxIKw3YSm0nQqaRvrJsVmzzxBiVHizVg7CszaKl6bzT6u1LgoNkmzhwDbwZlEgY41xCh/vmWV4l/a8/xQEZq0BKzeV7cpyujiEry0NLkBMYJbbsi4hZAhBcQO3sepSyR1ckp+tAI0LVPXz/7Ir0wfMQS7yfwXt/5cV0gpy/Ka6FwnZhPfalHFRmKYEBl8jyKz+WQAolR3R2ozCzxdV6HVEYLJfvVgVL3/Y74q7BKgtd8/XGmRSiVkWLqidQOmAX2D8WxHx+v46T2z/cxT8KiKFvFyGr350XEdzkqSzh0JN3kMpzWuLzy5dHAIDRwp23vomTJOuoCOsoRcekcdSWZzDSClvBm6IVS1EW0t8uWfiIz1ZJV6L1HFWnpVtwEGfoRp/Np6r2UFLj5SSl7vuTmb0OgGrRiq8YmYSrhIru9t0iDpPO+YdJmsX81NKRsQ+3K2AQauY+afnxb/bFvljlVWZnX8ROcSbAXHdSjeGZVgpWa8uWbmOy0YB3JU4pFODRh2HiCxyQK8Xa5ekRdiD1b7rirm1ngIJadVcu7Osi11dyEnf2CvFfrRcOpBLOwGDITWg79pSh5NBiKb/pNl+ocJutpX4gs=';const _IH='ba5fdf53054305351ff38bb1def31949b2ab572393cbc09f289d6978bd89aaa9';let _src;

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
