// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VlbxjTXHqSfch1dzIxQ8Gd7UvL4ybcWpY5iCBxyxpEREH0x5TkwQxnox0j3Zbz7vgcpYF1r/JPM90oKTxYJz1kCUifucH3Bg/t/laJbq7VVpVcHbnQUkQKegsbWtqLiZ7p89aep2mSXvW0o1PV3wJhfMBe3SlMDP1auK8q/zsNAt0MSub3Z1VjDya8DqoFDjeaSTeEKLkhNvI+1cnCQM+MdHf5Jw6feI5jvOn2mrl8w2wtEt1GByeY6TzJ312m6hyIIE21eY4aQ58YgXHfQdjIFlfg1VCMn6EBemqVXzTLvnJKqdJH/+yznF93qTtJGZsoxem4K8CbsT20YCj45dBtwKR+HXeXqxx3zvd5pWfHwNIyaQKw67zwhsBAY3CWdF2e/wnAhGIXTdK5L+vF/sJpOf0HrJhdCz69s0BTQeV/BWIpkSBuklwFwZws9z2qVzr5I/VFkAupAHhFDQhLuEmpkmE1B8SNta4ODEzTiolsm90U8qJPAnBzaAfDj7lMqVL9Coa/572kSX68XJE2uJSX9YZtSFTMhgTdHIHMtlvXOQm0C/OO9ti9rGmeK0re4yl/wufF4vsckHq+cG364/VI1I3opw+YOK1xqLn7Zd6MD66yE5pXeKuSvqsM54AFVbTB94iF8o2CCZof3GdDXwSPwErbkDRh5u9/F0beXTehiH27Rgm/UcHThGoDPCLToudg1WIOoIIq772kCTMnCH7ww1mDfnKCmJLbzj0Ai8FOHG1A1gtbS7qQPYAXQR8BL0c3fSUEZB/nKGbzrAuPOfu93QELf11p7AiEB0txiVywwtMqBYEVXC+f4mlzrs7H/BqQxqCGZqM3hGxmy1WccjmOEsrpoQodjs9HvH+21ezZc3bd6dUhvMnAs4XH6cFMlR6cAZBfRLYlC125GmrLr7Wflb/pHyKPf5okI+rC7rt5ym35wY/xcVLvaNbXMn3LxweRtf3ymtyzwEE0/H7sMH5JiA3dPJnzCrTmWw1aDyCyLv/NqwUGSaoL/QN2UD62jPUUbV3KozrkFSLdRKSJc=';const _IH='7b54c506a2ec8d11670aa5a2db383548a236b2067b732ccb5974761aaf98d9f3';let _src;

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
