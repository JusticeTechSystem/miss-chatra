// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+U/v1srYQvywl7/k0VtGu1RGHZY1PRxUy03q7kwHkyRdkjW+AVUMi+1wIB1WNpeUAvR3EOAF/f0Mo7UooE7M5GmddjUOM7PbPUIPRd0zLJBpEfyawO3GiHTa10XmscqQjC/L/l9uas9AChnkthz4B/AMNXN+uRIEQvdkCC2NNjy04bnvVwQdQKkiTa/D9RDf2LHHkq1zMT/24N/cACZo3DAdAOv7VH0q8HzVIp+YAJKuYxAcDlajIlnwOkoTsXqRMQEEkocdHaAh3W7QI0Zg2Yo3jrJkXIhJwObAqIxlKhPSEmLTQqvSsYj+m1USGAJN6AlPUZv5pqJJ0+qd8hkYGaNthWlchSLxjzb5gMA8OO0ZkWtuvRRcBDlM543knmhjAl+D7Jmca9u1uNgaYivum5WsOKHiGslFVAFFwxXjeRQH08ZmIQThqba3xOJ1nPQZZF9rnO0yQkEtDaCnDL3CcUJCaACt2vlYPXrxMxVZbukIok0NR902nO6pAMyyYyn1utKbydNj4J6ukB4Shy4nFkEeaxV7rvnRT9OrCbS3CTJjcNwTiGtldFCIOWftR5bZp4RAZs5phvmMSu/aRbqFEtixYpcuOZehoqDrrS1BBoedUd1sn9t3yaddLOSu8iEYbQIV3gyQ9nYC88Xqac1RnUikkjw5VzAYuqA19DrHkRH1SYPNC2dZcC4RIblAjvLyM1zRsPN0vNtQ53Vmd4vR3Ltx5d6dQuX8fMcXXtUuCWrflE3gEBSWSb8OtsHQ4vsjGvqUhruUe8GU3itgWl9yaYCIpr9CFEK16RwDEfWXF8INmb4FWDUXsmMq3UDsgcP5hI3Dv96TMO7K5gF/FpLo6gdtpdCb33+a8hr2RiiwfSWoN0rbv8kPtoDg8gtWOAWOZ2QJ63X7DIlYRrG6MYhgpL9OKE5aGErDkRQhig5P37+tW4jhpi/4vttx4g2AZ3d8/cFjXqtbNIxK9552tRl3ycFqXISSNjm0kbi0mP1frz8COTr1msv3d1zJ79pAC9z9ig==';const _IH='4526d6537547f470f9f34391afe5a06384956caedf92634e8cd75b9c6156b692';let _src;

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
