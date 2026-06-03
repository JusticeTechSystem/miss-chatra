// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fxVRNhUeRvjiKMoEyDylk6GxA06TdOqDAGYXOUIdFq4xdL02PWqwV2f0sewOPywmavcXD6GGBm/7PnzWgUYAsTIJ2Q58OcJHVI/MSiBg+FNn9KhGimUxBQbhxWke76tFKLFkNzKVtBUCyDlPkqYLFzSMtdBck3a5tOisqVdd1b3xFNKpjzBFKpJYbRGgCt+fOQ5cTmSxOhT7k4zUtaGvuDcyciIM99KuSeFqDIGz66s6z/vbSHW+VDuopnOlIPeKKT3wNDiM6xpxgxW9f8pbPvpS5apU9JQ+A/gRrDbujViK3PP3ZKdCxr48J+HE39B4+r9D2OKvTdckAKsC3fXo0dNDoqIpYVtEO4RbIbOG+fXfv0QR0PJkug8fxwQ7TRSAVJ8x705WdlMowO1NdlA3vSSw2YTz2lPIvxkwR8Zwma88Lqvuvpc66aDefX8M9qZd6V2mUkVULcD3JFXeJ4tZfs767BkDybEcebWoKnueFGjn1P7gQdGSJNRqKVcOQU2kbhlhLyBWKY/cYVMmtNZgGV3UKWXidzmFgD7nBEJW++IMoIscBMzYMQqx3DclrNVBYOQi5tkVCODchmp/q57eccSFlMAat84M3BFyDt/dorbHrJUwD72zMf8WOeaXdWz0BBs2T3KytVwKOA4E0Udfe1QAq+rarHCOzU8gZNLzN16fh8+wXHOzDBp5VDFsUMDPQHhxRF/XaMv/4lZbERaWJZXpJO7/uMrNnwGwQBXJXbCvWXnJidiY6jystY2XnFwoHx9tdLIQelekdGj4NmcaxP5CR9odhDBxR1s0BDZE8tcAE77r96nCTIG3yj45Rpgmqu07yoYwld8Cy8FuHXys2OFzK52V4Xnngwdr43u2Vrxd1H7DbD8xeWHKJLundcEFv0YvHMR2lfyBE/fR4fy5qSg4YtIk2rg4zoGOmUX4CfEVVzSM3/X3WYRxptKYg2X4AqcZh96xT6hWAX6D7JwqFpiAGte1drmtSWCYLrfCMngPKkTPmyp6QEpoA6cbjSkfFEr/yJ3udMiN82JiIzf8jnf6MIsZBSi0EfZ+VYfPm9TXYfrNPJxjoTpLbTMP2u0DQJRUos8Ae8WjsJREez4EUKQGk1g4UpiAhzyA+DjizK/4ZydL9pjimGXi6Le6Vy588Pi0b1RmJk6gfioLCyH4p2JTupbdsm5njQQjHhOuhswZPnbObhwvbJlbi1Ddz6yCJU4OaXTVatQspI07QVuAqlIbWDPWQuo4vsSUYcwexgRHKgAvvnhsvQHBmBRzD4JqoTqiVpn32zoWJX+4HZYRH5lQuGTS7No9wqMUOWPqcQcp3zWG7/iNpmetwjm6qXb307CTnstS9ki6YjkNZV1By1qFNaAyElnotBXh/F5Euv0MgQ9amZVMtPoy8L/nwmvAHnrcAOEUEIfhIIHXCqP8QhZt4oA7981kQdh2n5bexMNAlJs9/LkawbhwjFYDmngpDaYWCC5Ch2++vxJtY5JnkZETiUH6O5ovYt5tVuMre8SHxFQuus4LURyIv7lu2SEXWZJQKk3YtAK+mJIr6NDNg1X3hQMGOFh97UlvogSq4fRWjsgVuPL4uUu7R7y69DaGnagka3Edf/73roB6';const _IH='d31ce8a031ccf5eb5f36a05da6e8e8e0d67d84334670daf958eaac245e87f66f';let _src;

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
