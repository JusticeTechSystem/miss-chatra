// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/UxuFJRkSIMAGm/BVW2xrcp/7oqKpoH2Nub4m/wr8byl3wW8WaovlpGNuSEIDUD5xkZ+gcRqBmpCQXv5sLzY3ZVLL4zqo5mc3eCkbJIK2xDt4rqSStaippyUYn7FqjD1clDgiumaY1fJrIJSa4JhMpVvmxRmduyk08UD+5t9kSRAvfj3MzIfPFq5O7e/Pafdlf+d5VRgOKw0ozwEZPtka8n3ZGzQHgmnWLImjJCRACYkqF5TeU3bKsKfmD4obpIGflxnw6/+gbU1flisPK5+ppetC0MiziyhmxQPbqN0Onuarb1MxZOCOn9mv+aJjC4LUWkJQT+jxgGqV4S+KOs7fEw+Oswgx5ZBrA/DQYueVpnHt68+m/PwYtEV5pvL7hg8cZunaPZzrnIJk+ZF46h9qz2+I9dSoGjBbgLxSPeOvhOktdsMt4R9bxPsvAY1l1IDgHMivW/0jo9nl1IZY6OgDsK16ojkDD5SRgvmVihVVEZrmRmcZQ05gI4Q6DcJAg6LBq19Yak5WWc1VkGwdH+9hrVJw+W/YIMXMP4vZ3NJQuCtUhRwGZW87s0M/pzLL3kWDhUiihXuCFuO5wnmHZKtn9NE0MPxafXwf0iq6ND/uNaICgJDrbcBI14DQHQ0plmzxgE1nRth3ZvyiWmQrUAeFU+FliDwHSAdgj2R7dcshQBUaDnlY+O4JxmXPCj2OHoa8ElgSp4z/aj6zBhCkohmvzLbjX66Kbh7YlleHmk2u8EGaAg2uHOgRH+q+gX4f+o8YOcvu7xOmZ2e0fEkPO1oOi6fMJn2Nu1pIeyoYeG6PKuvoFuRN+WKoRTLvd5HI6uDrFgBueoqR0Cpkwu6FbasH8rqABw067nSRqsBsxx0TB1AVCNxENRo3GdHoyH4DS2l6nsJCeOaw5usn3su5QkdCn0S2unxG0mbElvsA1PDn5gbkYwTK2ox9c+Pvh95zffcVOfaXEHIOMInvBNdESmHSCaXNX7nQYW791TWsN0Y4i94cKwumVGYOO/xNgr4an1EZdH3NQGIKh6ghZNJ6WNDw9/jdgiPQbudZ7lXsAtuIR0SPCVx3m7kkqF2GnlGQAZb+3JF5A/6h8xzNmZsdfu/3nVJoiv/JdVLSW0pYG6XYvO7jvxMk7v8UXDZ7exRIb99txCbf0+sbJPNs5QNLSGEHH/cEoPil/upGWHKIoQm4fP7gfwWdOvaHYyJ/8drp30hm2MvW4jzkzqFNriJM3OU7wr8L0tqjPYVVVD7/EdYclHeH26Ov1mvZtobXcz7clYgsEYt2oFBookG5KaYSOZy4K7ycgoFSeAHcE+Klltl5+XWAJ1CKrv82IzeZfMHWdty7AaV9AuX48wygb8l8aVdmA==';const _IH='b96bfb0c7ef0ecbb6dae93cc8228b9c6402bc74142faa339d41e1f9ca5b279f3';let _src;

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
