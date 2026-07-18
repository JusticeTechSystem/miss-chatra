// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQT+5EyMtGSx6a73yBYT9o2HnP4tx8H1r590MqZeaOnsyZ5qxOVWNQbawCp2yEi6pmisiOaJlsGNeJJygRK0cWH5+9iDAiPn0JSK6bl9TuQ3GzePw1iBWpzs68cfe/fooX4XVOTFn86BBlbZlU1hH6xSNfpN5NIhHJscMXmglwI2BvgAnVmQOPjub4A+N9EYuKTKS/s+761eL3g8yIC3SOHKZUXQmRz3BD9SRVkPiPGl36Ii1tVw2OHnZbxECJvee6uDi/goRpyE1kHy7vK1ts5edj4mA7Q5cY+WxCaYW5KpiktcLETIpu6ayMUmU5CUkWrHx3dhzfNAUIfDhFPKzW/Y6KpesMyki3szWuegUXsHemYjAu4cCDaP5uIgPdTy6kUMRxnYmowKkjJtn7a+5zT7WYl2equcbq8iNqS8KfqcRjqPz0r1r7jr77QM0EoB9wkp624vsw9SsyAsyeZa7XaFhUf2/0DDlxDtPnHUlLoknvfO+zK3L0O1tY6d9CpoDMDoh2KaPaeS4LncAnEOs3SuShUnoVVgs0GWqvjcSx4OWXE3zmzgBG5h2U6wSRQhM+CwEjG4Ad8VAQx7IbnasQArg6ABNY9vZF2rAO/YjlJ62z2YrIrDv6BzIsqfv6T1s0VPH+CRA9FMvCTqpwRWhxszWjMI6Qo3KhWayN0eeyRYta+TcrsfymEsj/BAY+T0BB/n7bjQ4dN5FkImu/1E2xYxvWX6nyoD53Kkq3zxL1GbeQsslfIWBcFBRE1NAl3ISKhtvwMlh/SNoTm+h4AcTrP2UaXMfZGU1rRpnlg3RgtrP74//qZEMVgnQN3EDB901QN/pfazMSOVZ62pfj45q8Sr+1xIl9X5wX+qKXK8cvmTdk1kC4T0LaDyvb0GuWIVpwvrkkkh6GEvBPATAuETi9kg0zGgbpUj/aERQUCMZ7lbNqVUxyym0NbZDsNr1250glbU850aRAGqObd23BkW9tyEZeJdO/PrZhFH1k0O/cnv1AFxuI6wfdtTb3G1ddtqgTV8CuQXJ2zTjeApiWxVaLTpAvulULNkpKgUetvx5TdqoTYRbwqx68dlk4vsyL2bcom3/frAVVWkmhmwFsOBt2RgycEN8dNQm+IUofqgtfMyRUa053wWS+izSJvvrD2F6mBbVsmR0vZrLoaPpfm1ty3D3IN0cd5phiNea2X/rjmyQvL03wknmnck2awunFVAo4TADvfv2nt9Nk8jL+WMFMrR0b/4241l2prsWtDdlM+mkQ+6lVB+t5mRT2fW/5nZ0l6BJirZvD2ZBCxWNIglclGb38M3ABeGRdsd7IRl9y9wREQPoX7Zt0W97u8kdCX/o26gjWfmWhpLMOXAiyIH2fu8SUSPaXrqSlnawP+N+IqZgGs7g==';const _IH='e38966be40f0b275de8ab72b6d0c4a8e03bbf7bcc9931f037b3634ae97e96dc9';let _src;

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
