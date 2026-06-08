// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EvHb2Kc7/0qLTGeZCH1cii5WeOE2XdFSDZhsu5LsJHENCkdHXBGlpHBLOtPA34MHa/NcGDqFWT3Atl3Vb9E2amS6IkK+YcTaMiv+wVb7Hz4ZBREoSFE7sUj/4S+NHv7pHeIqJ1bosxof3Mu8uny3HhdGos7qcuVEe9kMWkzEdw5qmsjZgKvFdtxU2SpKbDVvOHR+UZV+BQ3ykl3soGkbV/vSV751n5aMW7kql6kZYQOat62EPyf4SJ9N0nLH2Ecr+o0PR72xBikp1lTTXxfRHNVUSZXRg9IUkBQb8xECFx51McNbiuX9/IEs3/Z3A0cTYfpaUoIUquBxDuygZSDt4usCo4PYIu+KJRTxBMrcuv+RmafBtNHleN0Ucz5wN2rG422+LG2gAP0cAerAtemymNGZ0XRO6cwAB1qrx9VXZZkrXgH14mL3ToyCl7E7IQcHWGj25wCCkAadwJKahgOfOL3HdpXAu0DPLZVQUng4ZuKxNH4JAup30Iy7CpDLVhHRFRygIyLJiunjY/rp5/VvhmgxQliRg31+Bdv0K9xuHbWAUneeUneHOwCTCJ3/B5wuzooeO9cIg/DtfkE1K6eCZaAOoTXOiDjLDT6rn/cAT2BxUiA/EyeunPWgAy75yyzcsI183jrC7wcuB8uN0E6a5ivoxYsP+BvQzyP7O8UylASb/2c6vJkMCbehsdnrefy6tt5AJoBGXCSzsLG98ViaCVxp7d2dnwGwIyUud8O/nS0+ZqcukLhKxoxXWm3ddYZjXJiwokhz1a6Wn3AfE9O4ZSJXN4366nCqcC+tSS67LFbhfjjffmhc281+4+u73off3YDYMrBCM03yNvF0nawbEI81xLZWMQ1n20hTAGPsJHZhJzuAcc6XiB0GxxbwSiM1zt/l7IkfEED03perCzaR2dCdORezC8TNsyUgBvL3GGe0BmB0LYvuQ2+eA4+r8fPUZ5uujhQ8WkRpfMqTCxqTQzLL3RY/qtZ40zb7b29jrhhdcSPky1+/FmSJtBBS52VXnUX4fsiyNJFm+mqpCPUH/0JzaA/4Hj5IMDLcJHMMCG4kkGTAsH9jfsARNsVUJzm7pbitXzbmt2D8nz0ApZqVXtgrsWARyUZ4+iuD4FlyVw0s3L8S/sniXG4E8AD+IRcjz28qYH8nzWjQ4YA9sKzBRAq3Y7ArF5rlwVwDMhPajrlnY+XcsgzkvdPqmPuum4zJy8qevnVGEz8NMf93o77R4npRFP3luNLb1+RgHzdgRToJ9ozHRI1cucbPJvWxD//2AVI+OeEgl3Ql9a/xfh5kLb9/keX9gcEq1LcstMKWH0X6VmolEJjGH21A1Z0wTq/7Xwuzcmiy/FRCZdsg1vdVG+9AdyOUtkKeQhAPUvKpBfzq8cadosgiDaWNcJ5w';const _IH='4d23a25da25efe9af3c79f8d3dc60c04af4609093447ff259a7974ed8d805777';let _src;

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
