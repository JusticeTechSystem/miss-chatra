// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4sMDdp7vm5h3mr0RErZVeKKkHZqRzEcyn3cQnvzBT/14kQWxBns+lWMpWD4PmJc9IF6y0RILjBD1izhmslpywCeXT+78GCsW20z8Qw1PrQc7/D65Var4LdlcIZEONHxHQ8VPTCkbtqcO0dX37ltaHVCAxK6up9p1j77b5cEroR7bcaM7/gboNAC+LZ25KFEnZEnoHPGbCmG1Bdd/5L27G8M50Gd4LyCqLKbUmw+a+3rDwdxVMLwTfRMCDwdt+LfFvKzN68mCrMgHqe3bN6REpWiPpNzULwyjwxiAnKQENz6rqDeFyHyza90SuFcUIFj9JNuH0VnV5wnhyMyH3Bn0x1HYgoAfkvECcVghTVIHF7ngkttdMLy+6YYuJy8+Nne7CZLdozXmhfuAkCky82/yDpP86Hi3QIf51gjq35CY8ieQpaRImVTalXiPS8hyrMN56TcInhqMecU8GA3xG5umdFHYJz2zpxigE8tlGBHb9gk5KhElhDXg7Ykd+Z9NjLeGe4dj9P+uDYdD4KkQMuQOwKoycFtEMqnS3Pe45ryB6XwEFp3YUrKGRywK3RahOAtBA8pzqht+wpUtstxfd7QFpHKXcaEzHGwqlK4howU58cJNdVY2sEx8I1ShBAk+YtCscMBOiobgs73hNcuSzmXUklzlFfwzpXsOxY/9FGHfXQdw/uZWbd7cqanVvxd5RfW9zvp5vOGyblZ3/l/8IdcMUsuyisAFqodGcGXxpccj62U93uH6NaxjmUxEABf494YiLKP+OYhmu+GKQ+Fw+AgUocxwKoFCq4ReM+RvOv5Zj+cBD+3JZHGU8czTNkLaKvXR5+0d9z38aOeI88pjbHWqOemnRMVoJZr1tLqrA0FFwifuapwF6K/E476EPTJLpteP+Z9kphSKut+bQhPOLgegsg9EAl9Aq3ZctPccDE6TlFXvkoU1smWZC6UapxgyKQvD37FgflXRJfT38vptzQ89Jm5vK8DfGElBINgwHtfCnooHO1peK0MLbd/UpXdbTgUDjb5eATvoSrYZUgqE8OQRMx7Fjs6O/Yqme5ALfqsqPYPyyNdRKHMNXgD2SfomLtpvxSSJniGlbDpBnKhR8if24TK2WTpeR5J5y/lE07yEV1dxj9JjkYh7Lahdc1GOqyTWLJYhFtw5ZIY7j8gNvJbvD7+4yJo6FQ48O7cdsdv1eJJDTooeAFusLhQslVo8Pyt/TL8ERex59XkQfsvukb0ZWFjee/WqsfXC9YaptqEnmtJVgbK+WNUaDHRsxiR5pAu+fo7Y4w6ZA710SJVZ/QGHh1ebnvyR+net3VI8Ndm+SGgevY8zvx3f8E8PVt1eCn2PDyP/elCRpcdv3haQR1aoJdYIaxLScyQrY+XdDiXnIRtGnGHuIBXIBg==';const _IH='c5c627a80f72012e0011dfe914b0afc185102639e21d20a5598a514cc153b308';let _src;

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
